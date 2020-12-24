import {getTimeInfo} from "../utils/common.js";
import Abstract from "./abstract.js";
import he from "he";

const createOfferTemplate = (globalOffers, offersIds) => {
  const offerTemplate = globalOffers.map((offer) => {
    return offersIds.includes(offer.id) ? `<li class="event__offer">
                          <span class="event__offer-title">${offer.title}</span>
                            &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.price}</span>
                        </li>` : ``;
  });
  return offerTemplate.join(``);
};

const createWaypointTemplate = (waypoint, globalOffers) => {

  const {dateStart, dateEnd, type, destination, date, price, isFavorite, offersIds} = waypoint;

  const offerTemplate = createOfferTemplate(globalOffers[type], offersIds);

  const favoriteBtnActive = isFavorite ? `event__favorite-btn--active` : ``;

  const duration = (dateEnd && dateStart) ? getTimeInfo(dateEnd, dateStart) : ``;

  return `<li class="trip-events__item">
            <div class="event">
              <time class="event__date" datetime="2019-03-18">${date ? date.format(`D MMM`) : ``}</time>
              <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
              </div>
              <h3 class="event__title">${type} ${he.encode(String(destination))}</h3>
              <div class="event__schedule">
                <p class="event__time">
                  <time class="event__start-time" datetime="2019-03-18T10:30">${dateStart ? dateStart.format(`HH:mm`) : ``}</time>
                    &mdash;
                  <time class="event__end-time" datetime="2019-03-18T11:00">${dateEnd ? dateEnd.format(`HH:mm`) : ``}</time>
                </p>
                <p class="event__duration">${duration}</p>
              </div>
              <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">${he.encode(String(price))}</span>
              </p>
              <h4 class="visually-hidden">Offers:</h4>
              <ul class="event__selected-offers">${offerTemplate}
              </ul>
              <button class="event__favorite-btn ${favoriteBtnActive}" type="button">
                <span class="visually-hidden">Add to favorite</span>
                <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                  <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                </svg>
              </button>
              <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
              </button>
            </div>
          </li>`;
};

export default class WaypointView extends Abstract {
  constructor(waypoint, globalOffers) {
    super();

    this._globalOffers = globalOffers;
    this._waypoint = waypoint;
    this._editClickHandler = this._editClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createWaypointTemplate(this._waypoint, this._globalOffers.getOffers());
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  _editClickHandler(evt) {
    evt.preventDefault();
    this._callback.editClick();
    document.querySelector(`.trip-main__event-add-btn`).disabled = false;
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.event__favorite-btn`).addEventListener(`click`, this._favoriteClickHandler);
  }

  setEditClickHandler(callback) {
    this._callback.editClick = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._editClickHandler);
  }
}
