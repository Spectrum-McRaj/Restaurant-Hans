
/*
* assets/js/main.js
*/
(()=>{
  'use strict'
  requirejs([
    // Classes

    'class/Guest',
    'class/Ingredient',
    'class/Menu',
    'class/MenuItem',
    'class/Order',
    'class/Reservation',
    'class/Table',

    // Data
    '../../data/glob_arr', // temporary arrays with dummy data for test/demo purposes

    // Template
    'template/navmenu',
    'template/pageloader',

    // Helpers
    'helpers/crEl',
    'helpers/glob',
    //'helpers/glob_arr',
    'helpers/utils',

    // Modules
    'modules/guest',
    'modules/ingredient',
    'modules/menu',
    'modules/menuitem',
    'modules/order',
    'modules/reservation',
    'modules/table',
    'modules/invoices',

  ]// requirejs
  ,()=>{


    globArr();
    navMenu( _glob.arr.pages );
    pageHashLoad();
    window.onhashchange = pageHashLoad;

  });
})();
