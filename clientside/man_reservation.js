// fake stuff to test

let reservations = []
// /*
for (i=0;i<Math.random()*200,i++) reservations.push( { id:i, name:"Mr Nummer"+i} );

// */

const updatepage = () => {
  let output = "<table><caption>reservations</captions>\n";
  output+="<tr><th>id</th><td>Reservation on name</th><th>Actions</th></tr>\n";
  for(let rsrvtn of reservations){
    output+=`<tr valign=top><td align=right>${rsrvtn.id}</td><td>${rsrvtn.name}</td><td><input type=button onclick="Modify(${rsrvtn.id});" value="Modify">&nbsp;<input type=button onclick="CancelR(${rsrvtn.id});" value="Cancel"></td></tr>\n`    ;
  }
  output+="</table>";
  let e = getElementById("ReservationTable");
  e.innerHTML=output;
}
