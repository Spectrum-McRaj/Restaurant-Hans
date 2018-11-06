'use strict'
/*
* assets/js/helpers/utils.js
*/

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
