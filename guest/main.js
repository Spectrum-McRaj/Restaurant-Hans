"use strict";

// let datamodule = [require("./guest")];

requirejs(["guest","form"], function() {

  let guestlist = [];
  let guest = new Guest;

  let add_form = $buildFormFromObjProps( guest, '#formulier', function(){
    let button = document.querySelector('button');
    button.innerHTML = 'Add New Guest';
  });

   $formSubmit( add_form, function(){
     let id = $getRandomInt(1000, 9999);
     let guest_data = $getFormData( add_form );
     document.querySelector("form").reset();
     guest_data.id = id;
     guest = new Guest( guest_data );

     guestlist.push(guest);
     console.clear();
     console.log(`Data of ${guest._firstname} ${guest._lastname} added to reservation table:`);
     console.table(guestlist);



   });
  // let guest = new datamodule[0].Guest(

});

function $getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
