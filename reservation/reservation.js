
function getReservation( id ){
  for( let item of arrayReservation ){
    if( item.id === id ) return item;
  }
}
overviewReservation();

function overviewReservation(){

  let table = document.createElement( 'table' ),
  table_thead = document.createElement( 'thead' ),
  table_tr = document.createElement( 'tr' ),
  table_th = document.createElement( 'th' ),
  ouput = document.getElementById( 'output' );
  table.setAttribute( 'class','table' )
  table_th.innerText = 'Guest';
  table_tr.appendChild( table_th );

  table_th = document.createElement( 'th' );
  table_th.innerText = 'Time';
  table_tr.appendChild( table_th );

  table_th = document.createElement( 'th' );
  table_th.innerText = 'Persons';
  table_tr.appendChild( table_th );

  table_th = document.createElement( 'th' );
  table_th.innerText = 'Table';
  table_tr.appendChild( table_th );


  table_th = document.createElement( 'th' );
  table_tr.appendChild( table_th );

  table_th = document.createElement( 'th' );
  table_tr.appendChild( table_th );
  table_thead.appendChild( table_tr );
  table.appendChild( table_thead );

  let table_tbody = document.createElement( 'tbody' );
  for( let item of arrayReservation ) {
    table_tr = document.createElement( 'tr' );

    let table_td = document.createElement( 'td' );
    table_td.innerText = item.guest;
    table_tr.appendChild( table_td );

    table_td = document.createElement( 'td' );
    table_td.innerText = item.timestamp;
    table_tr.appendChild( table_td );

    table_td = document.createElement( 'td' );
    table_td.innerText = item.persons;
    table_tr.appendChild( table_td );

    table_td = document.createElement( 'td' );
    table_td.innerText = item.table;
    table_tr.appendChild( table_td );

    let button_edit = document.createElement( 'button' );
    button_edit.setAttribute( 'class', 'btn ' )
    button_edit.innerHTML = 'Edit';
    button_edit.addEventListener( 'click', (event) => {
      updateReservation( item.id )
    });
    table_td = document.createElement( 'td' );
    table_td.setAttribute( 'style', 'width:50px')
    table_td.appendChild( button_edit );
    table_tr.appendChild( table_td );

    let button_delete = document.createElement( 'button' );
    button_delete.setAttribute( 'class', 'btn ' )
    button_delete.innerHTML = 'Delete';
    button_delete.addEventListener( 'click', (event) => {
      deleteReservation( item.id )
    });
    table_td = document.createElement( 'td' );
    table_td.setAttribute( 'style', 'width:50px')
    table_td.appendChild( button_delete );
    table_tr.appendChild( table_td );


    table_tbody.appendChild( table_tr )

  }
  table.appendChild( table_tbody )
  output.innerHTML = '';
  output.appendChild( table );
}

function addReservation(){
  let add_form = document.createElement( 'form' );
  let add_form_fields = [
    { id : 'name', label : 'Name' },
    { id : 'date', label : 'Date' },
    { id : 'time', label : 'Time' },
    { id : 'persons', label : 'Persons' },
    { id : 'table', label : 'Table' }
  ]
  for( let field of add_form_fields ){
    let add_form_field = document.createElement( 'input' ),
    add_form_label = document.createElement( 'label' ),
    add_form_row = document.createElement( '' );

  }
  add_form.addEventListener( 'submit' ){
    new Reservation()
    new Guest()
  }
}



function updateReservation(){
  let update_form = document.createElement( 'form' );
  update_form.addEventListener( 'submit' ){
    new Reservation()
  }
}

function deleteReservation(id){


  let reservation_data = getReservation( id );
  let output = document.getElementById( 'output' );
  let container_confirm = document.createElement( 'div' );
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
  details.innerHTML = `<h4>Guest : ${reservation_data.guest}</h4><p>Time : ${reservation_data.timestamp}</p><p>Table : ${reservation_data.table}</p> `
  container_confirm.appendChild( details );

  // confirm
  let button_confirm = document.createElement( 'button' );
  button_confirm.setAttribute( 'class', 'btn ' )
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
    overviewReservation();
  });
  container_confirm.appendChild( button_confirm );

  // cancel
  let button_cancel = document.createElement( 'button' );
  button_cancel.setAttribute( 'class', 'btn ' )
  button_cancel.innerText = 'Cancel';
  button_cancel.addEventListener( 'click', (event) => {
    overviewReservation();
  });
  container_confirm.appendChild( button_cancel );

  output.innerHTML = '';
  output.appendChild( container_confirm );

}
