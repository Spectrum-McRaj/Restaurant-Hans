'use strict';
/*
* data/glob.js
*/

function globModule(){

  let modules = [
    { id : 'dashboard', label : 'Dashboard',
      module : () => { // _glob.module.dashboard(); _glob.module[ 'dashboard' ]();
      // mainDashboard
      }
    },
    { id : 'reservations', label : 'Manage Reservations',
      module : () => {
        mainReservations();
      }
    },
  ];
  for( let _module in modules ){
    glob( 'module', _module.id, _module.module );
  }
}
function globArr(){


  /*
  let pages = [];
  for( let _module in modules ){
    glob( 'arr', 'pages', { id : _module.id, label : })
  }
  */

  glob( 'arr', 'pages', [
    //Load these pages
    {
      id : 'dashboard',
      label : 'Dashboard'
    },{
      id : 'reservations',
      label : 'Manage Reservations'
    },{
      id : 'guests',
      label : 'Manage Guests'
    },{
      id : 'menu',
      label : 'Manage Menu Items',
      items : [
        {
          id : 'ingredients',
          label : 'Manage Ingredients'
        }
      ]
    },{
      id : 'tables',
      label : 'Manage Tables'
    },{
      id : 'invoices',
      label : 'Invoices'
    }
  ]); // pages



  glob( 'arr', 'reservations' , [
    //id, timestamp, guest, persons, table, arrangement, comments
    { id : 23456, timestamp : '2018-11-22T10:35:06', guest : 'Berry Edwards', persons : 5, table : 3, arrangement : 0, comments : '', hasPaid : false },
    { id : 23457, timestamp : '2018-11-23T18:35:05', guest : 'John Hope', persons : 5, table : 9, arrangement : 0, comments : '', hasPaid : false },
    { id : 23458, timestamp : '2018-11-24T15:35:04', guest : 'Pete Johnson', persons : 5, table : 26, arrangement : 0, comments : '', hasPaid : false },
    { id : 23459, timestamp : '2018-11-25T12:32:03', guest : 'Tom Bender', persons : 5, table : 30, arrangement : 0, comments : '', hasPaid : false },
    { id : 23450, timestamp : '2018-11-26T11:30:02', guest : 'Paul Davy', persons : 5, table : 2, arrangement : 0, comments : '', hasPaid : false }
  ] );


  glob( 'arr', 'tables' , [
    //id, chairs, reservation, guest, wheelchair
    {id : 1, chairs : 2, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 2, chairs : 2, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 3, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 4, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 5, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 6, chairs : 6, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 7, chairs : 6, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 8, chairs : 6, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 9, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 10, chairs : 2, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 11, chairs : 2, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 12, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 13, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 14, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 15, chairs : 6, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 16, chairs : 6, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 17, chairs : 6, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 18, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 19, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 20, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 21, chairs : 8, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 22, chairs : 8, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 23, chairs : 8, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 24, chairs : 8, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 25, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 26, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 27, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 28, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 29, chairs : 6, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
    {id : 30, chairs : 6, reservation : 0, guest: 0, order : 0, wheelchair: false, status: 0 },
  ] );


  glob( 'arr', 'orders' , [
    //id, guest, order, date, invoice, menuitems
  ] );


  glob( 'arr', 'invoices' , [
      // id, order, guest, amount, menuitems
  ] );


  glob( 'arr', 'guests' , [
    // id, firstname, preposition, lastname, email, telephone, country
    { id : 84356, firstname : '', preposition : '', lastname : '', email : '', telephone : '', country : '' }
  ] );
}
