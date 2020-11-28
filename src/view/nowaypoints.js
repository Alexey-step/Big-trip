import {createElement} from "./../util.js";

const createNoWaypointsTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

export default class NoWaypointsView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoWaypointsTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}