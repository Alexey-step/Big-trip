
const createInfoTemplate = (items) => {
  let destinationStr = `${items[0].destination}`;
  if (items.length > 3) {
    destinationStr += ` &mdash; ... &mdash; ${items[items.length - 1].destination}`;
  } else if (items.length <= 3) {
    for (let i = 1; i < items.length; i++) {
      destinationStr += ` &mdash; ${items[i].destination}`;
    }
  }
  return destinationStr;
};

const createRouteDateTemplate = (items) => {
  return `<p class="trip-info__dates">${items[0].date.format(`MMM DD`)}&nbsp;&mdash;&nbsp;${items[items.length - 1].date.format(`DD`)}</p>`;
};

export const createRouteInfoTemplate = (items) => {

  const routeInfoTemplate = createInfoTemplate(items);
  const dateTemplate = createRouteDateTemplate(items);

  return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">${routeInfoTemplate}</h1>

    ${dateTemplate}
  </div>
</section>`;
};
