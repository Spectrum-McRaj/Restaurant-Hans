"use strict";



class Table{
  constructor(data){
     this.id=ObjectID("table");
     this.maxchairs=data.maxchairs || 4; // if not set 4 will be used by default
     this.reservations=[]; // contains guest numbers. TODO: replace array with direct database readout over time!
     this.orders=[]; // link to orders ??
  }

  addguest(guestid){
    this.reservations.push(guestid);
    // TODO: check if a number if present and if the guest_id exists at all!
    // Link can provide guest information!
  }
}
