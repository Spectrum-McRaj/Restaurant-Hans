'use strict'
/*
* assets/js/modules/reservation.js
* TODO : addReservation() - table selection / date/time input & validation
*        https://github.com/Spectrum-McRaj/Restaurant-Hans/issues/8
*        tableReservation()
*        updateReservation() - build form
*                            - populate with data from array
*                            - pointer via location.hash?
*       deleteReservation()  - ''
* decrease amount of code with helpers/tools
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

function setReservation(reservation){
  console.log("set res");
  let id = reservation.id;
  for(let i = 0; i < _glob.arr.reservations.length; i++){

    if( _glob.arr.reservations[i].id === id ){
      _glob.arr.reservations[i] = reservation;
      console.log(_glob.arr.reservations[i].hasPaid + "");}

  }
}

/* -----------------------------------------------------------------------------
* add
*/

function overviewReservations(){
  navActiveItm( 'reservations/overview' );
  $( 'nav#primary a#reservations').addClass( 'active' );
  let nav_tab_active = document.querySelector( '.nav-link.active' );
  nav_tab_active.innerText = `Overview`;

  let arrayReservation = _glob.arr.reservations;
  let overview_fields = [
    { label : 'Date/Time', field : 'timestamp' },
    { label : 'Guest', field : 'guest' },
    { label : 'Persons', field : 'persons' },
    { label : 'Table', field : 'table' },
    { label : 'Paid', field : 'hasPaid'},
    { label : '', field : 'options' },

  ]

  let table = document.createElement( 'table' ),
  table_thead = document.createElement( 'thead' ),
  table_tr = document.createElement( 'tr' ),
  output = document.getElementById( 'page_output' );
  table.setAttribute( 'class','table table-hover' )
  for( let field of overview_fields ){
    let table_th = document.createElement( 'th' );
    // TODO : fix (col width jump at row hover) in stylesheet
    if( field.field === 'timestamp' || field.field === 'options' || field.field === 'guest'  ) table_th.setAttribute( 'style', 'width:225px;' )
    if( field.field === 'table' || field.field === 'persons' ) table_th.setAttribute( 'style', 'width:50px;' )
    if( field.field === 'hasPaid' ) table_th.setAttribute( 'style', 'width:15px;' );
    table_th.innerText = field.label;
    table_tr.appendChild( table_th );
  }

  table_thead.appendChild( table_tr );
  table.appendChild( table_thead );

  let table_tbody = document.createElement( 'tbody' );
  for( let item of arrayReservation ) {
    table_tr = document.createElement( 'tr' );
    // options buttons

    let button_paid = document.createElement( 'button' );
    button_paid.setAttribute( 'class', 'btn btn-sm' )
    button_paid.innerHTML = '<i class="far fa-edit"></i> paid';
    button_paid.addEventListener( 'click', (event) => {
      hasPaidReservation(!(item.hasPaid), item.id);
    });

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
    //button_group.appendChild( button_paid );
    button_group.appendChild( button_edit );
    button_group.appendChild( button_delete );


    for( let field of overview_fields ){
      let table_td = document.createElement( 'td' );
      if ( field.field === 'options' ){ // edit/delete buttons
        table_td.setAttribute( 'style', 'text-align:right;width:125px;')
        table_td.appendChild( button_group );

      }else if (field.field === 'hasPaid'){
        if( item[ field.field ] ){
          table_td.innerHTML = '<i class="far fa-check-square"></i>';
        }else{
          table_td.innerHTML = '<i class="far fa-square"></i>';
        }
        table_td.addEventListener( 'click', (event) =>{
          hasPaidReservation(!(item.hasPaid), item.id)
        })
        table_td.setAttribute( 'style','cursor:pointer')

      }else if (field.field === 'timestamp') {

        let date = new Date( item[ field.field ] ),
         date_options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        table_td.innerText = date.toLocaleDateString( 'en-US', date_options )+', '+item[ field.field ].split('T')[1]+' (over '+$.timeago(item[ field.field ]).replace(' ago','')+')';

      }else {
        table_td.innerText = item[ field.field ];
      }

      table_tr.appendChild( table_td );
      // TODO : fix (row height jump at hover) in stylesheet
      table_tr.setAttribute( 'style', 'height:56px;')
    }

    table_tbody.appendChild( table_tr )

  }
  table.appendChild( table_tbody )
  output.innerHTML = '';
  output.appendChild( table );

  $( 'table' ).DataTable();
  if( arrayReservation.length < 11 ) $('ul.pagination').hide();

}
/* -----------------------------------------------------------------------------
* add
*/
function addReservation(){
  let arrayReservation = _glob.arr.reservations;
  navActiveItm( 'reservations/add' );
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
  let valid_date = false,
  valid_data = true;
  for( let field of add_form_fields ){

    if ( field.id === 'table' ) { // TODO : select table(s) for this reservation


      let add_form_field = document.createElement( 'input' ),
      select_table_rand = tableReservation(); // returns random available table
      add_form_field.setAttribute( 'type', 'hidden' )
      add_form_field.setAttribute( 'id', 'table' )

      add_form_field.value = select_table_rand;
      add_form.appendChild( add_form_field );
      let add_form_field_table_label = document.createElement( 'div' ),
      add_form_field_table_val = document.createElement( 'div' ),
      add_form_row = document.createElement( 'div' );
      add_form_row.setAttribute( 'class','row' );


      add_form_field_table_label.setAttribute( 'class', 'col-sm-2' );
      add_form_field_table_label.innerText = 'Table'
      add_form_field_table_val.setAttribute( 'class', 'col-sm-10' );
      add_form_field_table_val.setAttribute( 'id', 'table_val' );
      add_form_field_table_val.innerText = select_table_rand;
      add_form_row.appendChild(add_form_field_table_label );
      add_form_row.appendChild(add_form_field_table_val );
      add_form.appendChild( add_form_row );

    /*}else if ( field.id === 'timestamp' ) {
    // TODO: let the new CrEl() magic happen!

      let row,col,form_group,label,input
      //row
      row = document.createElement( 'div' )
            row.setAttribute( 'class', 'row' );
      //row =  new CrEl( add_form ).create('div')
        //.attr('class','row');

        // col label
        col = new CrEl( row ).create('div')
          .attr('class','col-sm-2 col-form-label');
          // label
          label = new CrEl( col ).create('label') // TODO: Uncaught TypeError: this.parent.appendChild is not a function (crEl.js:18)
          .attr('for','date')
          .inner('Date/Time');

        // col date
        col = new CrEl( row ).create('div')
        .attr('class','col-sm-5 col-form-label');
        // form-group date
        form_group = new CrEl( col )
          .attr('class','form group');
          // label date
          label = new CrEl( form_group ).create('label')
            .attr('for','date')
            .inner('Date');
          // input date
          input = new CrEl( form_group ).create('input')
          .attr('type', 'hidden')
          .attr('id', 'date')
          .attr('placeholder','Date')
          .attr('autocomplete', 'off');


        // col time
        col = new CrEl( row ).create('div')
        .attr('class','col-sm-5 col-form-label');
        // form-group date
        form_group = new CrEl( col )
          .attr('class','form group');
          // label date
          label = new CrEl( form_group ).create('label')
            .attr('for','time')
            .inner('Time');
          // input date
          input = new CrEl( form_group ).create('input')
          .attr('type', 'hidden')
          .attr('id', 'time')
          .attr('placeholder','Time')
          .attr('autocomplete', 'off');
          */



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
      add_form_field.setAttribute( 'autocomplete','off' );
      if ( field.id === 'persons' ){
        add_form_field.setAttribute( 'type','number' );
      }
      add_form_field.setAttribute( 'class', 'form-control');
      add_form_field_col.setAttribute( 'class', 'col-sm-10' );
      add_form_field_col.appendChild( add_form_field );
      add_form_row.appendChild( add_form_field_col );
      add_form.appendChild( add_form_row );



    }

  }

  // submit button
  let button_submit = document.createElement( 'button' ),
  add_form_row = document.createElement( 'div' );
  add_form_row.setAttribute( 'class','row' );
  add_form_row.setAttribute( 'style','padding:10px;' );
  button_submit.setAttribute( 'class', 'btn ')
  button_submit.innerText = 'Add Reservation';
  add_form_row.appendChild( button_submit )
  add_form.appendChild( add_form_row )

  output.innerHTML  = ''; // clear output
  output.appendChild( add_form_header );
  output.appendChild( add_form ); // append form to output
  //let valid_data = true;

  let timestamp =  document.querySelector( 'input#timestamp' )
  //timestamp = new CrEl().act( timestamp, 'change', (event) =>{
    //console.log(event.target.value)

  $('input#timestamp').datepicker( { format:'dd-mm-yyyy', startDate: '0' }).on( 'change' , (event) =>{
    // check date, if valid; valid_date = true
    let date = new Date(event.target.value),
    today = new Date(),
    ss = today.getSeconds(),
    mM = today.getMinutes(),
    hh = today.getHours(),
    dd = today.getDate(),
    mm = today.getMonth()+1,
    yyyy = today.getFullYear();
    today = new Date(`${dd}-${mm}-${yyyy}`);

    //console.log(date.getTime())
    //console.log(today.getTime())
    //if ((date.getTime()>=today.getTime())){ // TODO : date of today is invalid
      valid_date = true;
      //$('#date-invalid,#date-valid').remove();
      //$('input#timestamp').removeClass('is-invalid').addClass('is-valid').after('<div class="valid-feedback" id="date-valid">over '+$.timeago(date).replace(' ago','')+'</div>');
    //  let date = new Date( item[ field.field ] ),
       let date_options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      $('#date_feedback').remove();
      $('input#timestamp').after(`<small class="muted feedback" id="date_feedback">${date.toLocaleDateString( 'en-GB', date_options )}, over ${$.timeago(date).replace(' ago','')}</div>`);
    //}else{
  //    $('#date-invalid,#date-valid').remove();
  //    $('input#timestamp').removeClass('is-valid').addClass('is-invalid').after('<div class="invalid-feedback" id="date-invalid">Please provide a valid date for this reservation</div>');
    //  valid_date = false;
    //}
  });

  $('input#persons').on( 'change', ( event ) => {
    // check if persons is a number
    //if( ! (isNaN( event.target.value )) ){
    if(   event.target.value > 0 ){
      $( 'input#persons' ).removeClass( 'is-invalid' )//.addClass( 'is-valid' );
      $( '#persons-invalid' ).remove();
      valid_data = true;
    }else{
      $( '#persons-invalid' ).remove();
      $( 'input#persons' ).removeClass( 'is-valid' ).addClass( 'is-invalid' ).after( '<div class="invalid-feedback" id="persons-invalid">Please provide a valid number for persons</div>' );
      valid_data = false;
    }
    // TODO : we want to select a table with more seats or combine tables
    // ---------------------------------------------------------------------------
        // we want at this point to select & combine tables
        // (if the amount of persons requires this)
        // SUGGESTION : calls something like selectTable( persons );
        //  which returns a array of selected available table(s);
    if( valid_data ){

    }
  });

  // form submit
  add_form.addEventListener( 'submit', (event) => {
    event.preventDefault() // prevent form submit

    let _guest = document.getElementById('guest').value;
    let _persons = document.getElementById('persons').value;
    let _timestamp =  document.getElementById('timestamp').value;
    let _table =  document.getElementById('table').value;
    //let add_data = new FormData( add_form ); // get data from form
    // TODO : find out why FormData( add_form ) returns empty?
    let add_data = {
      guest : _guest,
      persons : _persons,
      timestamp : _timestamp,
      table : _table
    }
    //console.log(add_data)

    if( ! valid_date ){ //invalid date
      bsAlert( '#page_output','warning','','Invalid date' )

      valid_data = false;
    }
    if ( (isNaN(_persons/1)) ) {
        bsAlert( '#page_output','warning','','Persons must be a number' )
        valid_data = false;



    }
    if(valid_data){ // valid data; save to array



      add_data[ 'id' ] = getRandomInt(1000,9999); // generate & assign random int as id
       // save reservation to array
       arrayReservation.unshift( add_data );
      _glob.arr.reservations = arrayReservation;
      let reservation_add = new Reservation( add_data );
      //arrayReservation.unshift( reservation_add );
      //location.hash = '#reservations'
      bsAlert( '.page-content','primary','',`Reservation for <b>${add_data.guest}</b> has been saved` )
      overviewReservations();
    }

  });
  $( 'nav#primary a#reservations').addClass( 'active' );
}

function hrsReservationSelect(){
  let select = document.createElement( 'select' );
}
/* -----------------------------------------------------------------------------
* update
*/

function updateReservation( id ){
  let arrayReservation = _glob.arr.reservations;
  navActiveItm( 'reservations/add' );
  let output = document.querySelector( '#page_output' ), // element for ouput in UI
  update_form = document.createElement( 'form' ),
  reservations = new Reservation, // class instance
  prop_label = reservations.propertyLabels(), // call method of instance for labels input
  update_form_header = document.createElement( 'h3' );
  update_form_header.innerText = 'Edit Reservation';
  update_form.appendChild( update_form_header )
  let update_form_fields = [ // form fields & labels; update to add/remove fields
    { id : 'guest', label : prop_label.guest },
    { id : 'timestamp', label : prop_label.timestamp },
    { id : 'persons', label : prop_label.persons },
    { id : 'table', label : prop_label.table },
    { id : 'hasPaid', label : prop_label.hasPaid }
  ]
  $('a.nav-link').removeClass('active');
  $('#nav_tab_edit').remove();
  let nav_tab_update = document.createElement( 'li' );
  nav_tab_update.setAttribute( 'class', 'nav-item' );
  nav_tab_update.setAttribute( 'id', 'nav_tab_edit' );
  nav_tab_update.innerHTML = '<a href="#" class="nav-link active"><i class="fas fa-edit"></i> Edit Reservation</a> ';
  nav_tab_update.addEventListener( 'click', (event) => {
    updateReservation( id );
  });
  let nav_tabs = document.querySelector( 'ul.nav-tabs');
  nav_tabs.appendChild( nav_tab_update );
  let reservation = getReservation( id );
  console.log(reservation)
  for( let field of update_form_fields ){

    let update_form_field = document.createElement( 'input' ),
    update_form_field_col = document.createElement( 'div' ),
    update_form_label = document.createElement( 'label' ),
    update_form_row = document.createElement( 'div' );
    // form row
    update_form_row.setAttribute( 'class','form-group row' );
    // label
    update_form_label.innerText = field.label;
    update_form_label.setAttribute( 'class', 'col-sm-2 col-form-label' );
    update_form_label.setAttribute( 'for', field.id );
    update_form_row.appendChild( update_form_label );
    // input
    update_form_field.setAttribute( 'id', field.id );
    update_form_field.setAttribute( 'class', 'form-control');
    update_form_field.value = reservation[ field.id ];
    update_form_field_col.setAttribute( 'class', 'col-sm-10' )
    if( field.id === 'hasPaid' ){
      if( reservation[ field.id ] ){
        update_form_field_col.innerHTML = '<i class="far fa-check-square"></i>';
      }else{
        update_form_field_col.innerHTML = '<i class="far fa-square"></i>';
      }
      update_form_field.setAttribute( 'type', 'hidden');
      update_form_field_col.addEventListener( 'click', (event) => {

        if( update_form_field.value ){
          update_form_field.value = false;

        }else{
          update_form_field.value = true;

        }
        update_form_field.value ? update_form_field_col.innerHTML = '<i class="far fa-check-square"></i>' : update_form_field_col.innerHTML = '<i class="far fa-square"></i>';

      });
      update_form_field_col.setAttribute( 'style', 'cursor:pointer');


    }
    update_form_field_col.appendChild( update_form_field );
    update_form_row.appendChild( update_form_field_col );
    update_form.appendChild( update_form_row );



  }

  let button_update = document.createElement( 'button' ),
  update_form_row = document.createElement( 'div' );
  update_form_row.setAttribute( 'class','row' );
  update_form_row.setAttribute( 'style','padding:10px;' );
  button_update.setAttribute( 'class', 'btn ')
  button_update.innerText = 'Update Reservation';
  update_form_row.appendChild( button_update );
  update_form.appendChild( update_form_row );


  update_form.addEventListener( 'submit', (event) => {
    event.preventDefault() // prevent form submit

    let _guest = document.getElementById('guest').value,
    _persons = document.getElementById('persons').value,
    _timestamp =  document.getElementById('timestamp').value,
    _table =  document.getElementById('table').value,
    _hasPaid =  document.getElementById('hasPaid').value;


    //let add_data = new FormData( add_form ); // get data from form
    // TODO : find out why FormData( add_form ) returns empty?
    let update_data = {
      guest : _guest,
      persons : _persons,
      timestamp : _timestamp,
      table : _table,
      hasPaid : _hasPaid
    }
    update_data[ 'id' ] = id;
    $('#nav_tab_edit').remove();

    setReservation(update_data)
    bsAlert( '.page-content','primary','',`Reservation for <b>${update_data.guest}</b> has been saved` )
    overviewReservations();
  });

  output.innerHTML = '';
  output.appendChild( update_form );


}
/* -----------------------------------------------------------------------------
* view
*/
function viewReservation( id ){
  let arrayReservation = _glob.arr.reservations;
  let output = document.querySelector( '#page_output' ), // element for ouput in UI
  view = document.createElement( 'div' ),
  reservations = new Reservation, // class instance
  prop_label = reservations.propertyLabels(), // call method of instance for labels input
  view_header = document.createElement( 'h3' );
  view_header.innerText = 'View Reservation';
  view.appendChild( view_header )
  $('a.nav-link').removeClass('active');
  $('#nav_tab_view').remove();
  let nav_tab_view = document.createElement( 'li' );
  nav_tab_view.setAttribute( 'class', 'nav-item' );
  nav_tab_view.setAttribute( 'id', 'nav_tab_delete' );
  nav_tab_view.innerHTML = '<a href="#" class="nav-link active"><i class="fas fa-minus-circle"></i> View Reservation</a> ';

}


/* -----------------------------------------------------------------------------
* delete
*/

function deleteReservation( id ){
  //location.hash = `#reservations/delete/${id}`
  let arrayReservation = _glob.arr.reservations; // get array data
  let reservation_data = getReservation( id ); // get current reservation data
  let output = document.getElementById( 'page_output' ); // element for output in UI
  let container_confirm = document.createElement( 'div' ); // element for confirmation in UI
  //let nav_tab_active = document.querySelector( '.nav-link.active' ); // current active tab
  //if (nav_tab_active) nav_tab_active.innerText = `Delete Reservation` // set text of current tab
  $('a.nav-link').removeClass('active');
  $('#nav_tab_delete').remove();
  let nav_tab_delete = document.createElement( 'li' );
  nav_tab_delete.setAttribute( 'class', 'nav-item' );
  nav_tab_delete.setAttribute( 'id', 'nav_tab_delete' );
  nav_tab_delete.innerHTML = '<a href="#" class="nav-link active"><i class="fas fa-minus-circle"></i> Delete Reservation</a> ';

  //nav_tab_delete.innerHTML = '<a href="#" class="nav-link active">Delete Reservation</a> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
  nav_tab_delete.addEventListener( 'click', (event) => {
    deleteReservation( id );
  });
  let nav_tabs = document.querySelector( 'ul.nav-tabs');
  nav_tabs.appendChild( nav_tab_delete );
  container_confirm.setAttribute( 'style', 'padding:25px') // TODO : fix this in stylesheet
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
  button_confirm.setAttribute( 'class', 'btn btn-dark' )
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
      if( item.id !== id ){ // remove by exclusion
        tmp_arr.push( item )
      }

    }
    arrayReservation = tmp_arr;
    _glob.arr.reservations = arrayReservation; // save data to array
    overviewReservations();
    //location.hash = 'reservations'

    nav_tabs.removeChild( nav_tab_delete );
    //nav_tab_active.innerText = 'Overview'
    // alert user something has happened
    bsAlert( '#page_output', 'primary', '', `Reservation of Guest <b>${reservation_data.guest}</b> at ${reservation_data.timestamp} has been deleted` )

  });
  container_confirm.appendChild( button_confirm );

  // cancel
  let button_cancel = document.createElement( 'button' );
  button_cancel.setAttribute( 'class', 'btn ' )
  button_cancel.innerText = 'Cancel';
  button_cancel.addEventListener( 'click', (event) => {
    overviewReservations();
    //location.hash = 'reservations'

    nav_tabs.removeChild( nav_tab_delete );
    //nav_tab_active.innerText = 'Overview'

  });
  container_confirm.appendChild( button_cancel );

  output.innerHTML = '';
  output.appendChild( container_confirm );

}
/* -----------------------------------------------------------------------------
* tables
*/

// TODO : table info from table module

function tableReservation( persons ){
  let reservations_tables = [], // array for current reserved tables
  tables_amount = _glob.arr.tables.length,
  select_table_rand = getRandomInt( 1,tables_amount ), // pick  a random table
  // TODO : check if selected table can host the amount of persons (check seats)
  arrayReservation = _glob.arr.reservations;
  for( let item of arrayReservation ){ // current reserved tables
    reservations_tables.push( item.table )
  }

  // if picked table is reserved, pick another random one...
  while( reservations_tables.includes( select_table_rand ) ){
    select_table_rand = getRandomInt( 1,tables_amount );
  }
  return select_table_rand;
}
function selectTableReservation( id ){

}
/* -----------------------------------------------------------------------------
* payments
*/

function hasPaidReservation(setBool, id){
  console.log("has paid " + setBool);
  let currentReservation = getReservation(id);
  console.log("1" + currentReservation.hasPaid);
  currentReservation.hasPaid = setBool;
  console.log("2" + currentReservation.hasPaid);
  setReservation(currentReservation);
  overviewReservations();
}
