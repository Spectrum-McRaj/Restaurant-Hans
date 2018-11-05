'use strict'
/*
* assets/js/helpers/pageloader.js
*/

function pageLoader( target ){
  let pageUrl = target.getAttribute( 'href' );
  $( 'nav ul li a' ).removeClass( 'active' );
  $( target ).addClass( 'active' );
  //target.setAttribute('class','active');
  $( 'main' ).hide().load( pageUrl, () =>{
    $( 'main' ).fadeIn()
    pageFunction( target.id )
  });
}

function pageFunction( page ){
  switch (page) {
    case 'reservations':
      // reservationsMain()

      break;
    default:
      // homeMain()
  }
}
