'use strict'
/*
* assets/js/helpers/navmenu.js
*/
function navMenu( items ){
  let navMenu_ul = document.createElement( 'ul' )
  for( let item of items ){
    let navMenu_li = document.createElement( 'li' )
    let navMenu_a = document.createElement( 'a' )
    navMenu_a.innerHTML = item.label
    navMenu_a.setAttribute( 'id', item.id )
    navMenu_a.setAttribute( 'href', `${item.id}.html`)
    navMenu_a.addEventListener( 'click', (event) => {
      event.preventDefault();
      pageLoader( event.target )
    });
    navMenu_li.appendChild( navMenu_a )
    if( item.items ){ // subitems
      let navMenu_ul_sub = document.createElement( 'ul' )
      for( let subitem of item.items ){
        let navMenu_li_sub = document.createElement( 'li' )
        let navMenu_a_sub = document.createElement( 'a' )
        navMenu_a_sub.innerHTML = item.label
        navMenu_a_sub.setAttribute( 'id', item.id )
        navMenu_a_sub.setAttribute( 'href', `${item.id}.html`)
        navMenu_a_sub.addEventListener( 'click', (event) => {
          event.preventDefault();
          pageLoader( event.target )
        });
        navMenu_li_sub.appendChild( navMenu_a_sub )
        navMenu_ul_sub.appendChild( navMenu_li_sub )
      }
      navMenu_li.appendChild( navMenu_ul_sub )
    }
    navMenu_ul.appendChild( navMenu_li )
  }
  let navMenu = document.querySelector( 'nav' )
  navMenu.appendChild( navMenu_ul )
}
