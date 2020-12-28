import Observer from "./../utils/observer.js";
import {FilterType} from "./../consts.js";

export default class FilterModel extends Observer {
  constructor() {
    super();

    this._activeFilter = FilterType.EVERYTHING;
  }

  setFilter(updateType, filter) {
    this._activeFilter = filter;
    this._notify(updateType, filter);
  }

  getFilter() {
    return this._activeFilter;
  }
}