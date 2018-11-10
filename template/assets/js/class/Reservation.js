'use strict'
/*
* assets/js/class/Reservation.js
*/

class Reservation {
  constructor (id, timestamp, guest, persons, table, arrangement, comments) {
    if( typeof id === 'object'){ // arguments als object
      let data = id;
      this._id = data.id;
      this._timestamp = data.timestamp;
      this._guest = data.guest;
      this._persons = data.persons;
      this._table = data.table;
      this._arrangement = data.arrangement;
      this._comments = data.comments;
    }else{
      this._id = id;
      this._timestamp = timestamp;
      this._guest = guest;
      this._persons = persons;
      this._table = table;
      this._arrangement = arrangement;
      this._comments = comments;
    }

  }
  propertyLabels(){
    return {
      timestamp : 'Date/Time',
      guest : 'Guest',
      persons : 'Amount of persons',
      table : 'Table',
      arrangement : 'Arrangement',
      comments : 'Notes'
    }
  }
}
