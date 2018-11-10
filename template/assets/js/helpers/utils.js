'use strict'
/*
* assets/js/helpers/utils.js
*/


// Bootstrap Alert
function bsAlert( target, type, icon, msg ){
  let info_alert_id = getRandomInt( 1000, 9999 );
  let info_alert = $( '<div></div>' ).addClass( 'alert alert-' + type) .attr( 'role', 'alert' ).attr( 'id', info_alert_id );
  info_alert.html( `<i class="fas fa-${icon}"></i> ${msg}` );
  $( target ).prepend( info_alert );
  setTimeout( () => {
    info_alert.fadeOut();
    setTimeout( () => { $( '#' + info_alert_id ).remove() } ,1000 );
  }, 5000 );

}

function getRandomInt(min, max) { // random nummer tussen min en max
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function data( element, name, value ) { // data-[name] attribute

    element = document.querySelector( element );
    if ( value === undefined ){

        value = element.getAttribute( `data-${name}` );
        try{
          if( value ){
            value = JSON.parse( value )
          } else {
            value = [];
          }
          // console.log( value );
          return value;
          //return value !== '' ? JSON.parse( value ) : [];
        } catch {
          return value.split(',');
        }

    } else {
        element.setAttribute( `data-${name}`, JSON.stringify( value ) );
    }
}




/*async */function load( url) {
  /*let response = await fetch( url );
  if ( response.ok ) {
      return await resolve(response.text());

   }
   */
 fetch( url )  // Promise zit al in fetch
 .then( ( response ) => {
   return url.indexOf( 'json' ) > 0 ? response.json() : reponse;
 })
 .then( ( obj ) => {
   return obj;
 });
}
//load( 'https://api.github.com/' )

function post( url = ``, data = {} ) {
  //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    return fetch( url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify( data ), // body data type must match "Content-Type" header
    })
    .then( response => response.json() ); // parses response to JSON
}
