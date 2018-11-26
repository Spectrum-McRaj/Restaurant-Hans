'use strict'
/*
* assets/js/modules/guest.js
* TODO : build module; add functions (overview, view, get, add, update & delete) to let things happen
*/
function mainGuest(){
  overviewGuest();
}
/* -----------------------------------------------------------------------------
* overview
*/
function overviewGuest(){
  console.log("overviewGuest says hi");
}
/* -----------------------------------------------------------------------------
* add
*/
function addGuest(){
  console.log("addGuest says hi");
}
/* -----------------------------------------------------------------------------
* view
*/
function viewGuest(){
  console.log("viewGuest says hi");
}
/* -----------------------------------------------------------------------------
* get
*/
function getGuest( id ){
  let guests = _glob.arr.guests;
  for( let guest of guests ){
    if ( guest.id === id ) return guest;
  }
}
/* -----------------------------------------------------------------------------
* update
*/
function updateGuest(){
  console.log("updateGuest says hi");
}
/* -----------------------------------------------------------------------------
* delete
*/
function deleteGuest(){
  console.log("deleteGuest says hi");
}

function addGuestFromReservation( guest ){

  let addGuestId = getRandomInt(1000,9999);
  guest[ 'id' ] = addGuestId;
  _glob.arr.guests.push( guest ); // NOTE : make call to REST API in the near future...
  return addGuestId;
}

function deleteGuestFromReservation( id ){
  let new_arr = [];
  let guests = _glob.arr.guests;
  for( let guest of guests ){
    if ( guest.id !== id ) new_arr.push( guest );
  }
  _glob.arr.guests = new_arr; // NOTE : make call to REST API in the near future...
}
