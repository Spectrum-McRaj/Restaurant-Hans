let arrayReservation = [
  //id, timestamp, guest, persons, table, arrangement, comments
  { id : 23456, timestamp : '', guest : '', persons : 5, table : 3, arrangement : 0, comments : ''},
  { id : 23457, timestamp : '', guest : '', persons : 5, table : 3, arrangement : 0, comments : ''},
  { id : 23458, timestamp : '', guest : '', persons : 5, table : 3, arrangement : 0, comments : ''},
  { id : 23459, timestamp : '', guest : '', persons : 5, table : 3, arrangement : 0, comments : ''},
  { id : 23450, timestamp : '', guest : '', persons : 5, table : 3, arrangement : 0, comments : ''}
]

function overviewReservation(){
  let table = document.createElement( 'table' )
  for( let item of arrayReservation ) {
    let table_tr = document.createElement( 'tr' );
    button_edit = document.createElement( 'button' );
    button_edit.innerHTML = 'Edit';
    button.addEventHandler( (event) => {
      updateReservation( arrayReservation.id )
    });
    let table_td = document.createElement( 'td' );
    table_td.innerText = arrayReservation.name;
    table_tr.appendChild( table_td );

    table_td = document.createElement( 'td' );
    table_td.innerText = arrayReservation.timestamp;
    table_tr.appendChild( table_td );

    table_td = document.createElement( 'td' );
    table_td.appendChild( button_edit );
    table_tr.appendChild( table_td );


    table.appendChild(  )

  }
  document.getElementById( 'output' ).innerHTML += table;
}

function addReservation(){

}

function updateReservation(){

}

function deleteReservation(){

}
