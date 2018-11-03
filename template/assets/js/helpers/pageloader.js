'use strict'
/*
* assets/js/helpers/pageloader.js
*/
function pageLoader( target ){
  let pageUrl = target.getAttribute( 'href' );
  $( 'main' ).hide().load( pageUrl, () =>{
    $( 'main' ).fadeIn()
  });
}
