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
    // http://listofrandomnames.com/index.cfm?generated
    { id : 23456, timestamp : '2018-12-22T10:35:06', guest : 'Corene Lukowski', persons : 2, table : 3, comments : '', },
    { id : 23457, timestamp : '2018-12-23T18:35:05', guest : 'Boyce Villafuerte', persons : 4, table : 9, comments : '', },
    { id : 23458, timestamp : '2018-12-24T15:35:04', guest : 'Lisette Copeland', persons : 3, table : 26, comments : '', },
    { id : 23459, timestamp : '2018-12-25T12:32:03', guest : 'Vernon Mcateer', persons : 8, table : 30, comments : '', },
    { id : 23450, timestamp : '2018-12-26T11:30:02', guest : 'Graham Durgan', persons : 2, table : 2, comments : '', }
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
