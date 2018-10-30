/*
* assets/js/main.js
*/
(()=>{
  requirejs([
    // Classes
    'class/Reservation',
    'class/Guest',
    'class/Menu',
    'class/Ingredient',
    'class/Table',

    // Modules
    'modules/reservation',
    'modules/guest',
    'modules/menu',
    'modules/ingredient',
    'modules/table'

  ],()=>{
    let pages = [ 'reservation','guest','menu',['ingredient'],'table'];
  }
  )
})();
