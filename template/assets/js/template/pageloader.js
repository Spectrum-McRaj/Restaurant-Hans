'use strict'
/*
* assets/js/helpers/pageloader.js
*/
function pageLoader( target ){ // event target element
  let pageUrl = target.getAttribute( 'href' ).slice(1);
  loadPage(`${pageUrl}.html`, target.id )
}

function loadPage( url, id ){
  loadMain( url, () => {
      pageFunction( id );
  });
}

function loadMain( url, callback ){
  $( 'main' ).hide().load( `pages/${url}`, () => {
    $( 'main' ).fadeIn();
    callback();
  });
}

function pageFunction( page ){
  let functionPath,args

  if( page.indexOf( '/' ) > 0 ) {
    page = page.split( '/' )
    functionPath = `${page[0]}/${page[1]}`
    args = page[2]
  }else{
    functionPath = page
  }

  switch (functionPath) {
    case 'reservations':
      mainReservations()
      break;
    case 'reservations/overview' :
      overviewReservations()
      break;
    case 'reservations/add' :
      addReservation()
      break;
    case 'reservations/delete' :
      deleteReservation( args )
      break;
    default:
      // mainHome()
  }
}

function pageHashLoad() {
  let hashLocation = location.hash,
  pageId = hashLocation.slice(1),
  pageUrl,
  pagePrev = glob( 'var' , 'currentPageId');

  if( pageId !==  '' ){
    navActiveItm( pageId );
    pageUrl = `${pageId.split('/')[0]}.html`;
    if( pagePrev ){
      console.log( `navigated from ${pagePrev} to ${pageId}`)
      if( pagePrev.split('/')[0] === pageId.split('/')[0] ){
        pageFunction( pageId );
      } else {
        loadPage( pageUrl, pageId );
        glob( 'var' , 'currentPageId' , pageId);
      }
    } else {
      loadPage( pageUrl, pageId );
      glob( 'var' , 'currentPageId' , pageId);
    }

  }
}
