/* nep gegevens */
let config = {
     VAT:20 // VAT is de engelse term voor BTW. Ik ben even voor het gemak uitgegaan van 20%, dit kan later wellicht veranderd worden!
}

let dishes = { 1:{desc:"Lobster with kaviar", price: 50.00}, 2: {desc:"Bordeaux Wine", price: 24.50}, 3: {desc:"Dame Blanche with champagne", price: 30.25}}

let reservation = {
     guest:"Dagobert Duck",
     items:[1,2,3],
}

/* einde nep gegevens */


function generate_invoice(process_reservation){
  var total=0;
  var calcVAT;
  var output="<table><caption><b>Invoice Molveno</b></caption>";
  for (let item of process_reservation)   {
      let dish=dishes[item]
      output += `<tr><td>${dish.desc}</td>`;
      output +  "<td align=right>"+dish.price+"</td></tr>"; // TODO: Make sure this is in a xxxx.yy format
      total  += dish.price;
    }
    calcVAT  = total * (config.VAT/100);
    output   += "<tr><td></td><td><hr></td></tr>";
    output   += `<tr><td align=right>Total excl. VAT:</td><td>${total}</td></tr>`;
    output   += `<tr><td align=right>VAT ${config.VAT}%:</td><td>${calcVAT}</td></tr>`;
    output   += `<tr><td align=right>Total incl. VAT:</td><td>${total-calcVAT}`;
}

console.log(generate_invoice(reservation));
