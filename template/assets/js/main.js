
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

    // Helpers
    'helpers/navmenu',
    'helpers/pageloader'

  ]// requirejs
  ,()=>{
    let pages = [
      { id : 'reservation', label : 'Reservations' },
      { id : 'guest', label : 'Guests' },
      { id : 'menu', label : 'Menu', items : [
        { id : 'ingredient', label : 'Ingredient'}
      ]},
      { id : 'table', label : 'Tables' }
    ] // pages
    navMenu( pages )
    console.log( 'test ')
  })
})()
