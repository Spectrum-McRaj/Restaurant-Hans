'use strict'
/*
* assets/js/modules/reservation.js
* TODO : addReservation() - table selection
*        updateReservation() - build form
*/

function mainReservations(){
  overviewReservations();
}

function getReservation( id ){
  let arrayReservation = _glob.arr.reservations;
  for( let item of arrayReservation ){
    if( item.id === id ) return item;
  }
}


function overviewReservations(){
  navActiveItm( 'reservations/overview' );
  $( 'nav a#reservations').addClass( 'active' );
  let arrayReservation = _glob.arr.reservations;
  let overview_fields = [

    { label : 'Guest', field : 'guest' },
    { label : 'Time', field : 'timestamp' },
    { label : 'Persons', field : 'persons' },
    { label : 'Table', field : 'table' },
    { label : '', field : 'options' },

  ]

  let table = document.createElement( 'table' ),
  table_thead = document.createElement( 'thead' ),
  table_tr = document.createElement( 'tr' ),
  output = document.getElementById( 'page_output' );
  table.setAttribute( 'class','table' )
  for( let field of overview_fields ){
    let table_th = document.createElement( 'th' );
    table_th.innerText = field.label;
    table_tr.appendChild( table_th );
  }

  table_thead.appendChild( table_tr );
  table.appendChild( table_thead );

  let table_tbody = document.createElement( 'tbody' );
  for( let item of arrayReservation ) {
    table_tr = document.createElement( 'tr' );

    let button_edit = document.createElement( 'button' );
    button_edit.setAttribute( 'class', 'btn btn-sm' )
    button_edit.innerHTML = '<i class="far fa-edit"></i> Edit';
    button_edit.addEventListener( 'click', (event) => {
      updateReservation( item.id )
    });

    let button_delete = document.createElement( 'button' );
    button_delete.setAttribute( 'class', 'btn btn-sm' )
    button_delete.innerHTML = '<i class="fas fa-minus-circle"></i> Delete';
    button_delete.addEventListener( 'click', (event) => {
      deleteReservation( item.id )
    });

    let button_group = document.createElement( 'div' );
    button_group.setAttribute( 'class','btn-group btn-group-sm' );
    button_group.appendChild( button_edit );
    button_group.appendChild( button_delete );
    for( let field of overview_fields ){
      let table_td = document.createElement( 'td' );
      if ( field.field === 'options' ){ // edit/delete buttons
        table_td.setAttribute( 'style', 'text-align:right;width:125px;')
        table_td.appendChild( button_group );



      }else {
        table_td.innerText = item[ field.field ];
      }

      table_tr.appendChild( table_td );
    }

    table_tbody.appendChild( table_tr )

  }
  table.appendChild( table_tbody )
  output.innerHTML = '';
  output.appendChild( table );
}

function addReservation(){
  let arrayReservation = _glob.arr.reservations;

  let output = document.querySelector( '#page_output' ), // element for ouput in UI
  add_form = document.createElement( 'form' ), // form element which is added
  reservations = new Reservation, // class instance
  prop_label = reservations.propertyLabels(), // call method of instance for labels input
  add_form_header = document.createElement( 'h3' );
  add_form_header.innerText = 'Add Reservation';
  let add_form_fields = [ // form fields & labels; update to add/remove fields
    { id : 'guest', label : prop_label.guest },
    { id : 'timestamp', label : prop_label.timestamp },
    { id : 'persons', label : prop_label.persons },
    { id : 'table', label : prop_label.table }
  ]
  let valid_date = false;
  for( let field of add_form_fields ){

    if ( field.id === 'table' ) { // select table(s) for this reservation
  // ---------------------------------------------------------------------------
      // we want at this point to select & combine tables
      // (if the amount of persons requires this)
      // SUGGESTION : calls something like selectTable( persons );
      //  which returns a array of selected available table(s);

      let add_form_field = document.createElement( 'input' );
      add_form_field.setAttribute( 'type', 'hidden' )
      add_form_field.setAttribute( 'id', 'table' )
      let reservations_tables = [], // array for current reserved tables
      select_table_max = 35, // asume we have 35 tables
      select_table_rand = getRandomInt(0,select_table_max); // pick  a random table
      for( let item of arrayReservation ){ // current reserved tables
        reservations_tables.push( item.table )
      }
      // check if picked table is reserved, if so pick another one
      while( !reservations_tables.includes( select_table_rand ) ){
        select_table_rand = getRandomInt(0,select_table_max);
      }
      add_form_field.value = select_table_rand;
      add_form.appendChild( add_form_field );



    }else{
      let add_form_field = document.createElement( 'input' ),
      add_form_field_col = document.createElement( 'div' ),
      add_form_label = document.createElement( 'label' ),
      add_form_row = document.createElement( 'div' );
      // form row
      add_form_row.setAttribute( 'class','form-group row' );
      // label
      add_form_label.innerText = field.label;
      add_form_label.setAttribute( 'class', 'col-sm-2 col-form-label' );
      add_form_label.setAttribute( 'for', field.id );
      add_form_row.appendChild( add_form_label );
      // input
      add_form_field.setAttribute( 'id', field.id );
      add_form_field.setAttribute( 'class', 'form-control');
      add_form_field_col.setAttribute( 'class', 'col-sm-10' )
      add_form_field_col.appendChild( add_form_field );
      add_form_row.appendChild( add_form_field_col );
      add_form.appendChild( add_form_row );

      if( field.id === 'date' ) add_form_field.addEventListener( 'keyup', (event) => {
          // check if date is after today
        });

    }



  }
  // submit button
  let button_submit = document.createElement( 'button' )
  button_submit.setAttribute( 'class', 'btn ')
  button_submit.innerText = 'Add Reservation'
  add_form.appendChild( button_submit )

  output.innerHTML  = ''; // clear output
  output.appendChild( add_form_header );
  output.appendChild( add_form ); // append form to output
  // form submit
  add_form.addEventListener( 'submit', (event) => {
    event.preventDefault()
    if( valid_date ){
      let add_data = new FormData( event.target ); // get data from form
      add_data[ 'id' ] = getRandomInt(1000,9999); // generate & assign random int as id
      arrayReservation.push( add_data ); // save reservation to array
      _glob.arr.reservations = arrayReservation;
      let reservation_add = new Reservation( add_data );
      //new Guest()
      bsAlert( '#page_output','primary','',`Reservation for <b>${reservation_add.guest}</b> has been saved` )
    }else{
      bsAlert( '#page_output','warning','','Invalid date' )
    }

  });
  $( 'nav a#reservations').addClass( 'active' );
}



function updateReservation(){

  let output = document.querySelector( '#page_output' ), // element for ouput in UI
  update_form = document.createElement( 'form' );
  update_form.addEventListener( 'submit', (event) => {
    new Reservation()
  });
}

function deleteReservation(id){

  let arrayReservation = _glob.arr.reservations;
  let reservation_data = getReservation( id );
  let output = document.getElementById( 'page_output' );
  let container_confirm = document.createElement( 'div' );
  let nav_tab_active = document.querySelector( '.nav-link.active' );
  nav_tab_active.innerText = `Delete Reservation`
  container_confirm.setAttribute( 'style', 'padding:25px')
  //header
  let header_confirm = document.createElement('h3');
  header_confirm.innerText = 'Confirm Delete Reservation';
  container_confirm.appendChild( header_confirm );

  // question
  let question_confirm = document.createElement( 'p' );
  question_confirm.innerText = 'Are you sure you want to delete this reservation?';
  container_confirm.appendChild( question_confirm );

  // details
  let details = document.createElement( 'div' );
  details.innerHTML = `<h4>Guest : ${reservation_data.guest}</h4>`
  details.innerHTML += `<p>Time : ${reservation_data.timestamp}</p>`
  details.innerHTML += `<p>Table : ${reservation_data.table}</p>`
  container_confirm.appendChild( details );

  // confirm
  let button_confirm = document.createElement( 'button' );
  button_confirm.setAttribute( 'class', 'btn' )
  button_confirm.setAttribute( 'style', 'margin-right:5px;')
  button_confirm.innerText = 'Delete';
  button_confirm.addEventListener( 'click', (event) => {
    /*for( let i = 0; i < arrayReservation.length-1; i++){
      if ( arrayReservation[i].id === id) {
        arrayReservation.splice(i, 1);
      }
    } */
    let tmp_arr = [];
    for( let item of arrayReservation ){
      if( item.id !== id ){
        tmp_arr.push( item )
      }

    }
    arrayReservation = tmp_arr;
    _glob.arr.reservations = arrayReservation;
    overviewReservations();
    nav_tab_active.innerText = 'Overview'
    bsAlert( '#page_output', 'primary', '', `Reservation of guest <b>${reservation_data.guest}</b> has been deleted` )
  });
  container_confirm.appendChild( button_confirm );

  // cancel
  let button_cancel = document.createElement( 'button' );
  button_cancel.setAttribute( 'class', 'btn ' )
  button_cancel.innerText = 'Cancel';
  button_cancel.addEventListener( 'click', (event) => {
    overviewReservations();
    nav_tab_active.innerText = 'Overview'
  });
  container_confirm.appendChild( button_cancel );

  output.innerHTML = '';
  output.appendChild( container_confirm );

}
