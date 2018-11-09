'use strict'
/*
* assets/js/helpers/pageloader.js
*/
function pageLoader( target ){ // event target element
  let pageUrl = target.getAttribute( 'href' );
  loadPage(pageUrl, target.id )
}

function loadPage( url, id ){
  loadMain( url, () => {
      pageFunction( id );
      //_glob.func[ page ]
      //console.log( page )
      //console.log(_glob.func)
      //glob( 'func', page )
  });
}

function loadMain( url, callback ){
  $( 'main' ).hide().load( `pages/${url}`, () => {
    $( 'main' ).fadeIn();
    callback();
  });
}

function pageFunction( page ){

  switch (page) {
    case 'reservations':
      mainReservations()

      break;
    default:
      // mainHome()
  }
}

function locationHashChanged() {
  let hashLocation = location.hash,
  pageId = hashLocation.slice(1),
  pageUrl = `${pageId}.html`;
  loadPage( pageUrl, pageId );
  navActiveItm( pageId )
}

window.onhashchange = locationHashChanged;
