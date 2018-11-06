'use strict'
/*
* guest/guest.js
* BELANGRIJK; wijzig de properties naar (alleen) wat nodig is voor
* reservering (ivm privacy e.d. zoals genoemd tijdens de demo)
*/
class Guest {
  constructor(id, firstname, preposition, lastname,
  dateofbirth, gender, email, phonenumber, street, housenumber, city, postalcode) {
    //console.log(arguments)
  if(typeof id === 'object'){  // arguments als object
    let data = id; // feitelijk id parameter dus..
    this._id = data.id;
    this._firstname = data.firstname;
    this._preposition = data.preposition;
    this._lastname = data.lastname;
    this._dateofbirth = data.dateofbirth;
    this._gender = data.gender;
    this._email = data.email;
    this._phonenumber = data.phonenumber;
    this._street = data.street;
    this._housenumber = data.housenumber;
    this._city = data.city;
    this._postalcode = data.postalcode;
  } else { // specifieke arguments uit parameters
    this._id = id;
    this._firstname = firstname;
    this._preposition = preposition;
    this._lastname = lastname;
    this._dateofbirth = dateofbirth;
    this._gender = gender;
    this._email = email;
    this._phonenumber = phonenumber;
    this._street = street;
    this._housenumber = housenumber;
    this._city = city;
    this._postalcode = postalcode;
  }

///*



//*/
  }

  get profile() { // overbodig(?); instantie geeft hetzelfde terug?
    return {
      id: this._id,
      firstname: this._firstname,
      preposition: this._preposition,
      lastname: this._lastname,
      dateofbirth: this._dateofbirth,
      gender: this._gender,
      email: this._email,
      phonenumber: this._phonenumber,
      street: this._street,
      housenumber: this._housenumber,
      city: this._city,
      postalcode: this._postalcode
      // groupsize: this._groupsize,
      // dateofvisit: this._dateofvisit,
      // arrangement: this._arrangement,
    };
  }

  //Labels
  getPropertyLabel(){
    return {
      _id: 'Id',
      _firstname: 'First name',
      _preposition: 'Preposition',
      _lastname: 'Last name',
      _dateofbirth: 'Date of birth',
      _gender: 'Gender',
      _email: 'E-mail',
      _phonenumber: 'Phone',
      _street: 'Street',
      _housenumber: 'House nr.',
      _city: 'City',
      _postalcode: 'Postal code'
      // _groupsize: 'Group size',
      // _dateofvisit: 'Date of visit',
      // _arrangement: 'Arrangement',
    };
  }



}
/*
let data_ = {
  id: 23456,
  firstname: 'John',
  preposition: '',
  lastname: 'Doe',
  dateofbirth: '01-01-01',
  gender: 'male',
  email: 'j.doe@provider.com',
  phonenumber: '01234 56789',
  street: 'Main Street',
  housenumber: 12,
  city: 'Hometown',
  postalcode: '1234 AB'
}

let classInst = new Guest( data_ )
console.log( classInst )
classInst = new Guest( 23456, 'John', '', '01-01-01', 'male',  'j.doe@provider.com', '01234 56789', 'Main Street', 12, '1234 AB' )
console.log( classInst.profile )
*/
