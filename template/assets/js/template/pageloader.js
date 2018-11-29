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

function pageFunction( page ){ // called in loadPage() / pageHashLoad()
  let functionPath,args

  if( page.indexOf( '/' ) > 0 ) {
    page = page.split( '/' )
    functionPath = `${page[0]}/${page[1]}`
    args = page[2] // functionPath args (for view/delete) endpoint
    // console.log( args )
  }else{
    functionPath = page
  }
  // _glob.module [ functionPath ]( args ); // _glob.module in data/glob.js
  switch (functionPath) {
    case 'menu':
      mainMenu();
      break;
    case 'menu/overview':
      overviewMenu();
      break;
    case 'menu/view':
      viewMenu( args );
      break;
    case 'menu/add':
      addMenu();
      break;
    case 'menu/delete':
      deleteMenu( args );
      break;
    case 'reservations':
      mainReservations();
      break;
    case 'reservations/overview' :
      overviewReservations();
      break;
    case 'reservations/add' :
      addReservation();
      break;
    case 'reservations/delete' :
      deleteReservation( args );
      break;
    case 'invoices' :
      mainInvoices();
    default:
      // mainHome()
  }
}

function pageHashLoad() { // called in assets/main.js
  let hashLocation = location.hash,
  pageId = hashLocation.slice(1),
  pageUrl,
  pagePrev = glob( 'var' , 'currentPageId');

  if( pageId !==  '' ){
    navActiveItm( pageId );
    pageUrl = `${pageId.split('/')[0]}.html`;
    if( pagePrev ){
      console.log( `navigated from ${pagePrev} to ${pageId}`)
      glob( 'var' , 'currentPageId' , pageId);
      if( pagePrev.split('/')[0] === pageId.split('/')[0] ){
        pageFunction( pageId );
      } else {
        loadPage( pageUrl, pageId );

      }
    } else {
      loadPage( pageUrl, pageId );
      glob( 'var' , 'currentPageId' , pageId);
    }

  } else {
    location.hash = '#dashboard';
  }
}
