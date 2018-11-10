'use strict';
/*
* assets/js/helpers/tmp_arr.js
*/
function globArr(){
  glob( 'arr', 'reservations' , [
    //id, timestamp, guest, persons, table, arrangement, comments
    { id : 23456, timestamp : '2018-11-22 10:35:06', guest : 'Jan Keizer', persons : 5, table : 3, arrangement : 0, comments : ''},
    { id : 23457, timestamp : '2021-11-23 18:35:05', guest : 'Piet Hendriks', persons : 5, table : 3, arrangement : 0, comments : ''},
    { id : 23458, timestamp : '2021-11-24 15:35:04', guest : 'Kees Prins', persons : 5, table : 3, arrangement : 0, comments : ''},
    { id : 23459, timestamp : '2021-11-25 12:32:03', guest : 'Tom Jacobs', persons : 5, table : 3, arrangement : 0, comments : ''},
    { id : 23450, timestamp : '2021-11-26 11:30:02', guest : 'Paul Admiraal', persons : 5, table : 3, arrangement : 0, comments : ''}
  ] );
  

  glob( 'arr', 'tables' , [
    //id, chairs, reservation, guest
    {id : 1, chairs : 4, reservation : 23456, guest: '', order : '' }
  ] );
  let arrayTables = _glob.arr.tables;

  glob( 'arr', 'orders' , [
    //id, guest, order, date, invoice, menuitems
  ] );
  let arrayOrders = _glob.arr.orders;

  glob( 'arr', 'invoices' , [
      // id, order, guest, amount, menuitems
  ] );
  let arrayInvoices = _glob.arr.invoices;

  glob( 'arr', 'guests' , [

  ] );
}
