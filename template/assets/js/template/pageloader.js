'use strict'
/*
* assets/js/helpers/pageloader.js
*/

function pageLoader( target ){ // event target element
  let pageUrl = target.getAttribute( 'href' );

  $( 'main' ).hide().load( `pages/${pageUrl}`, () =>{
    $( 'main' ).fadeIn();
    pageFunction( target.id );

    //glob_.func[ target.id ]();
  });
}

function pageFunction( page ){
  // glob_.func[ page ]()
  // glob( 'func', page )
  switch (page) {
    case 'reservations':
      // mainReservations()

      break;
    default:
      // mainHome()
  }
}
