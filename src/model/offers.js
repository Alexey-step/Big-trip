import Observer from "./../utils/observer.js";

export default class OffersModel extends Observer {
  constructor() {
    super();
    this._offers = [];
  }

  setOffers(offers) {
    this._offers = offers;
  }

  getOffers() {
    return this._offers;
  }

  // updateWaypoint(updateType, update) {
  //   const index = this._waypoints.findIndex((waypoint) => waypoint.id === update.id);

  //   if (index === -1) {
  //     throw new Error(`Can't update unexisting waypoint`);
  //   }

  //   this._waypoints = [
  //     ...this._waypoints.slice(0, index),
  //     update,
  //     ...this._waypoints.slice(index + 1)
  //   ];

  //   this._notify(updateType, update);
  // }

  // addWaypoint(updateType, update) {
  //   this._waypoints = [
  //     update,
  //     ...this._waypoints
  //   ];

  //   this._notify(updateType, update);
  // }

  // deleteWaypoint(updateType, update) {
  //   const index = this._waypoints.findIndex((waypoint) => waypoint.id === update.id);

  //   if (index === -1) {
  //     throw new Error(`Can't delete unexisting task`);
  //   }

  //   this._waypoints = [
  //     ...this._waypoints.slice(0, index),
  //     ...this._waypoints.slice(index + 1)
  //   ];

  //   this._notify(updateType);
  // }
}
