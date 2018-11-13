"use strict";

class Reservation {
  constructor (id, timestamp, guest, persons, table, arrangement, comments) {

    this._id = id;
    this._timestamp = timestamp;
    this._guest = guest;
    this._persons = persons;
    this._table = table;
    this._arrangement = arrangement;
    this._comments = comments;
    this._hasPaid = false;
  }

}
