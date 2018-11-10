'use strict'
/*
* assets/js/helpers/navmenu.js
*/

function navMenu ( items ){
  let navMenu = document.querySelector( 'nav#primary' ),
  navMenu_ul = document.createElement( 'ul' );

  for( let item of items ){
    let navMenu_li = navItm( item );

    if( item.items ){ // subitems
      let navMenu_ul_sub = document.createElement( 'ul' );
      for( let subitem of item.items ) navMenu_ul_sub.appendChild( navItm( subitem ) );
      navMenu_li.appendChild( navMenu_ul_sub );
    }
    navMenu_ul.appendChild( navMenu_li );
  }
  navMenu.appendChild( navMenu_ul );
}

function navItm( item ){
  let navItm_li = document.createElement( 'li' ),
  navItm_a = document.createElement( 'a' );

  navItm_a.innerHTML = item.label;
  navItm_a.setAttribute( 'id', item.id );
  navItm_a.setAttribute( 'href', `#${item.id}` ); /*
  navItm_a.addEventListener( 'click', ( event ) => {
    //navClickEvent( event )
  }); */

  navItm_li.appendChild( navItm_a );
  return navItm_li;
}
/*
function navClickEvent( event ){
  //event.preventDefault();
  pageLoader( event.target );
  navActiveItm( event.target.href );
}
*/
function navActiveItm( target ){
  /*let navLinks = document.querySelectorAll( 'nav#primary ul li a');
  for( let navLink of navLinks ){
    let navLinkClass = navLink.getAttribute( 'class' );
    if( navLinkClass ) navLinkClass.replace( 'active', '' );
    if( navLinkClass.indexOf( 'active' ) ) navLink.setAttribute( navLinkClass )
  }
  let targetClass = target.getAttribute( 'class' );
  target.setAttribute( 'class', `${targetClass} active`) */
  $( 'nav a' ).removeClass( 'active' );
  $( `nav a[href="#${target}"]` ).addClass( 'active' );
}
