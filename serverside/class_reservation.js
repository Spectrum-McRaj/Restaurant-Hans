"use strict";

class Reservation {
  constructor (id, date, guest, persons, table, arrangement, comments) {

    this._id = id;
    this._date = date;
    this._guest = guest;
    this._persons = persons;
    this._table = table;
    this._arrangement = arrangement;
    this._comments = comments;

  }

  get date () {
    let date = new Date(this._date);
    

  }

}
