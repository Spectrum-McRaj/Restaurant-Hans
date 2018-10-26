'use strict';
function $buildFormFromObjProps( object, target, callback ) {

  let obj_prop_names = Object.getOwnPropertyNames( object ); // namen properties object
  let form = document.createElement( 'form' ); // formulier element

  for( let prop_name of obj_prop_names ){ // loop door namen properties object

    // Bootstrap form-group row
    let form_group = document.createElement( 'div' );
    form_group.setAttribute( 'class', 'form-group row' );
    // Bootstrap col-form-label
    let label = document.createElement( 'label' );
    label.setAttribute( 'class', 'col-sm-2 col-form-label' );
    // property naam (gelijk aan 'name' en 'id' attributes input) als 'for' attribute label
    label.setAttribute( 'for', prop_name.slice(1) );



    // haal tekst van label uit getPropertyLabel method van object
    typeof object.getPropertyLabel() !== 'undefined' ? label.innerHTML = object.getPropertyLabel()[ prop_name ] : label.innerHTML = prop_name;


    // kolom input element
    let col_sm = document.createElement( 'div' );
    col_sm.setAttribute( 'class', 'col-sm-10' );
    let hidden = false;
    // input element
    let input;
    if( prop_name.indexOf( 'content' ) > 0 ) {
      input = document.createElement( 'textarea' );
      input.setAttribute( 'rows', '5' );
    } else {
      input = document.createElement( 'input' );
    }
    input.setAttribute( 'class', 'form-control' );
    input.setAttribute( 'name', prop_name.slice(1) );
    input.setAttribute( 'id', prop_name.slice(1) );

    // type invoer
    if( prop_name.indexOf( 'date' ) > 0 ) input.setAttribute( 'class', 'form-control date' );
    if( prop_name.indexOf( 'email' ) > 0 ) input.setAttribute( 'class', 'form-control email' );
    if( prop_name.indexOf( 'id' ) > 0 ) { // verberg id
      input.setAttribute( 'type', 'hidden' );
      hidden = true;
    }

    // voeg label/input element toe
    col_sm.appendChild( input );

    form_group.appendChild( label );
    form_group.appendChild( col_sm );
    // verborgen element niet als rij/kolommen toevoegen
    hidden ? form.appendChild( input ) : form.appendChild( form_group );
  }
  // knop t.b.v. toevoegen formulier
  let button = document.createElement( 'button' );
  //voeg  bootstrap btn btn-primary class toe
  button.setAttribute( 'class', 'btn btn-primary' );
  // tekst knop
  button.innerHTML = 'Toevoegen';
  // voeg knop toe aan formulier
  let footer = document.createElement('div');
  footer.setAttribute( 'class', 'text-right' );
  footer.appendChild( button );
  form.appendChild( footer );
  // voeg formulier in doelelement
  let form_ = document.createElement("div");
  form_.appendChild(form);
  document.querySelector( target ).innerHTML += form_.innerHTML;


  // formEvents ; date,email e.d.
  $formEvents();
  // callback; voer funtie uit nadat formulier aan doelelement is toegevoegd
  callback();
  // geef formulier uit doelelement terug
  return document.querySelector( target + ' form' );

}

function $getFormData( form ) {
  // maak nieuw object aan
  let data = {};
  // roep FormData object aan met formulier
  let formData = new FormData( form );
  // loop door .entries
  for( let item of formData.entries() ) {
    // voeg waarden toe aan data object
    data[item[0]] = item[1];
  }
  // geef data object terug
  return data;
}

function $formEvents() {
  if ( typeof jQuery != 'undefined' ) {
    //console.info( `jQuery ${jQuery.fn.jquery}` );
    $( 'input.date' ).datepicker();

    $( 'input.email' ).on( 'keyup', (event) => {
      $inputValidEmail();
    });

  } else {
    //console.warn( 'jQuery is niet beschikbaar' );
    //$event( 'keyup', 'input.email', () => {
    document.querySelector('inpu.email').addEventListener( 'keyup', (event) => {
      event.preventDefault();
      $inputValidEmail();
    });

  }
}

function $formSubmit( form, callback ){
  form.addEventListener( 'submit', (event) => {
    event.preventDefault();
    callback();
  });
}

function $inputValidEmail() {
  let input_email = document.querySelectorAll( 'input.email' );
  // https://emailregex.com/
  let email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  for( let input of input_email ) {
    let email_input_id = input.getAttribute( 'id' );
    let email_input_ = document.querySelector( `#${email_input_id}` );
    let email_input_value =  email_input_.value;
    let email_pattern_test = email_pattern.test( email_input_value );
    email_pattern_test ? email_input_.setAttribute( 'class','form-control email is-valid' ) : email_input_.setAttribute( 'class','form-control email is-invalid' );

  }
}

function $buildFormFromObjPropsTmpl( object, target, callback ) {

  let obj_props = Object.getOwnPropertyNames( object );
  let form = document.createElement( 'form' );

  for( let prop_name of obj_prop_names ){
    let label =  typeof object.getPropertyLabel() !== 'undefined' ? object.getPropertyLabel()[ prop_name ] : prop_name;
    let form_group_row_tmpl_data = {
      'input' : prop_name,
      'input_val' : '',
      'input_class' : (() => {
                        if( prop_name.indexOf( 'date_' ) > 0 ){
                          return 'form-control date';
                        }else{
                          return 'form-control';
                        }
                    })(),
      'label' : label
    }

    let form_group_row_tmpl = $getTemplate( 'form_group_row', form_group_row_tmpl_data );
    // Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
    // functie (input_class uit object geeft functie terug i.p.v. string
    form.appendChild( form_group_row_tmpl );
  }
  let form_btn_row_tmpl_data = { 'btn_class' : '', 'btn_label' : 'Toevoegen' }
  let form_btn_row_tmpl = $getTemplate( 'form_btn_row', form_btn_row_tmpl_data );

  form.appendChild( form_btn_row_tmpl );
  // Voeg formulier toe aan target
  document.querySelector( target ).appendChild( form );
  callback();
  return document.querySelector( target + ' form' );
}
