"use-strict";

// module.exports.Guest = class Guest {
class Guest {
  constructor(data) {
    // for ( let k in data ) this[k]=data[k];

    // this._id = objectId(data.id, "guest");  //This is what it should be later.
    if(!data){
      this._id = undefined;
      this._firstname = undefined;
      this._preposition= undefined;
      this._lastname= undefined;
      this._dateofbirth= undefined;
      this._gender= undefined;
      this._email= undefined;
      this._phonenumber= undefined;
      this._street = undefined;
      this._housenumber = undefined;
      this._city= undefined;
      this._postalcode= undefined;
      // this._groupsize= undefined;
      // this._dateofvisit= undefined;
      // this._arrangement= undefined;
      //Error message???
    }else{
      this._id = data.id; //temp
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
      // this._groupsize = data.groupsize;
      // this._dateofvisit = data.dateofvisit;
      // this._arrangement = data.arrangement;
    }
  }

  get profile() {
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
      postalcode: this._postalcode,
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
      _postalcode: 'Postal code',
      // _groupsize: 'Group size',
      // _dateofvisit: 'Date of visit',
      // _arrangement: 'Arrangement',
    };
  }



}
