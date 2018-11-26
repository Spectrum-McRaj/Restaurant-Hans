'use strict'
/*
* assets/js/modules/invoices.js
* TODO : build module; add functions (overview, view, add, update & delete) to let things happen
*/

/* nep gegevens */
let config = {
     VAT:10 // VAT is de engelse term voor BTW. Ik ben even voor het gemak uitgegaan van 20%, dit kan later wellicht veranderd worden!
}

let dishes = { 1:{desc:"Lobster with kaviar", price: 50.00}, 2: {desc:"Bordeaux Wine", price: 24.50}, 3: {desc:"Dame Blanche with champagne", price: 30.25}, 4:{desc:"Mushroom soup", price:12}}

let reservation = {
     guest:"Dagobert Duck",
     items:[4,1,2,2,3],
}

/* einde nep gegevens */

function mainInvoices(){
  showInvoice(reservation);
}

function showInvoice(process_reservation){
  // NOTE: In Italy the euro sign comes BEHIND the price!!!
  // The system could be enhanced to make it compatible with other countries
  // Or other currencies.
  // Using , or . may also be an enhancement if this is customizable.
  var total=0;
  var calcVAT;
  var output='<center><table><caption><b>Invoice Molveno</b></caption>';
  output += `<tr><td colspan=2 align=right>Invoice for ${process_reservation.guest}`;
  let mitems = {}
  for (let item of process_reservation.items)   {
      if (mitems[item]==undefined) mitems[item]=0;
      //console.log(mitems);
      mitems[item] = mitems[item] + 1;
  }
  for (let mitem in mitems){
      let dish=dishes[mitem]
      output += `<tr><td>${dish.desc}</td>`;
      output += "<td align=right>"+Number(dish.price).toFixed(2).replace(".",",")+" &euro;</td><td align=right>x"+mitems[mitem]+"</td><td align=right>"+Number(dish.price*mitems[mitem]).toFixed(2).replace(".",",")+" &euro;</td></tr>"; // TODO: Make sure this is in a xxxx.yy format
      total  += dish.price;
    }
    calcVAT  = total * (config.VAT/100);
    output   += "<tr><td colspan=3></td><td><hr></td></tr>";
    output   += `<tr><td colspan=3 align=right>Total excl. VAT:</td><td align=right>${Number(total).toFixed(2).replace(".",",")} &euro;</td></tr>`;
    output   += `<tr><td colspan=3 align=right>VAT ${config.VAT}%:</td><td align=right>${Number(calcVAT).toFixed(2).replace(".",",")} &euro;</td></tr>`;
    output   += `<tr><td colspan=3 align=right>Total incl. VAT:</td><td align=right>${Number(total+calcVAT).toFixed(2).replace(".",",")} &euro;</td></tr>`;
    output   += "</table></center>";
    //return output
    let page_output = document.querySelector( '#page_output' );
    page_output.innerHTML = output;
    printInvoice();
}

/* node test!
console.log(generate_invoice(reservation));
//*/
function printInvoice(){
  let print_btn = document.querySelector( 'button.btn-print')
  print_btn.addEventListener( 'click', (event) => {
    window.print();
  });
}
