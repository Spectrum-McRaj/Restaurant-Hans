
/*
* assets/js/main.js
*/
(()=>{
  'use strict'
  requirejs([
    // Classes
    'class/Reservation',
    //'class/Guest',
    //'class/Menu',
    //'class/Ingredient',
    //'class/Table',


    // Template
    'template/navmenu',
    'template/pageloader',

    // Helpers
    'helpers/crEl',
    'helpers/glob',
    'helpers/utils',

    // Modules
    'modules/reservation',
    'modules/guest',
    'modules/menu',
    'modules/ingredient',
    'modules/table',

  ]// requirejs
  ,()=>{

    glob( 'vars', 'pages', [
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
        label : 'Manage Menu',
        items : [
          {
            id : 'ingredients',
            label : 'Manage Ingredients'
          }
        ]
      },{
        id : 'tables',
        label : 'Manage Tables'
      }
    ]); // pages
    navMenu( _glob.vars.pages );

  });
})();
