
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

    // Modules
    'modules/reservation',
    'modules/guest',
    'modules/menu',
    'modules/ingredient',
    'modules/table',
    // Template
    'template/navheader',
    'template/navmenu',
    'template/pageloader',

    // Helpers
    'helpers/crEl',
    'helpers/glob',
    'helpers/utils'

  ]// requirejs
  ,()=>{
    buildHeaderNav()
    let pages = [
      {
        id : 'home',
        label : 'Home'
      },{
        id : 'reservations',
        label : 'Reservations'
      },{
        id : 'guests',
        label : 'Guests'
      },{
        id : 'menu',
        label : 'Menu',
        items : [
          {
            id : 'ingredients',
            label : 'Ingredient'
          }
        ]
      },{
        id : 'tables',
        label : 'Tables'
      }
    ] // pages
    navMenu( pages )

  })
})()
