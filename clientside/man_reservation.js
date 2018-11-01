// fake stuff to test

let reservations = []
// /*
let namen = ["Mr. X","Andries","Ans","Christoffel","Gijs","Nick","Jeroen","Rob","Raymond","Ron","Theo","Laura","Bart",
             "Donald Trump","Barack Obama","Bill Clinton",
             "George H.W. Bush","George W. Bush","Ronald Ragon","Jimmy Carter","Ronald Raegon","Richard Nixon","Nils van Buren",
             "Abraham Lincoln", "George Washington", "John Fitzerald Kennedy",
             "Gerrit Schimmelpenninck","Johan Rudolf", "Thorbecke","Dries van Agt","Joop den Uyl","Ruud Lubbers","Wim Kok","Jan-Peter Balkellende","Mark Rutte",
             "Francois Mitterand","Jaques Chiraq","Francois Hollande","Emmanuel Macron",
             "Helmut Kohl","Schoeder","Angela Merkel"
           ];
for (i=0;i<Math.random()*200;i++) reservations.push( { id:i, name:namen[Math.floor(Math.random()*namen.length)] } );
const getByID=(id)=>{
  for(let r of reservations) if (id===r.id) return r;
  throw new Exception("No record on that number!")
}

// */


const Modify = (id) => {
  let r;
  try{
    r = getByID(id);
  } catch(e) {
    alert("That id does not exist!");
    return;
  }
  alert("Modify feature not yet implemented!\nPlease combe back later!")
}

const CancelAsk = (id) => {
  //let msg = "<h1 align=center style=\"color: rgb(255,0,0)\">* W * A * R * N * I * N * G *</h1>\n";
  let msg = "<h1 align=center style=\"color: rgb(255,0,0)\">Attention!</h1>\n";
  msg += `You are about to remove reservation #${id} from ${reservations[id].name}<br>This action cannot be undone<br><br>Are you sure?<br>`;
  msg += "<input type=button value=\"Yes\" onclick=\"CancelR("+id+");\">&nbsp;<input type=button value=\"No\" onclick=\"updatepage();\"><p>";
  let e = document.getElementById("ReservationTable");
  e.innerHTML=msg;
}

const CancelR = (id) => {
  let rmv=undefined;
  for(let i in reservations){
    if (reservations[i].id===id) rmv=i;
  }
  if (rmv===undefined) { alert(`Record #${id} does not exist`); return; }
  //(confirm(`Are you sure you want to cancel reservation #${id}?`))
  {
    /*
      let dr = reservations.slice(rmv,1);
      console.log(`${dr.length} records removed at index ${rmv}`);
      console.log(`${reservations.length} entries left!`)
      */
      let newr=[]
      for(let i in reservations) if (i!=rmv) newr.push(reservations[i]);
      reservations=newr;
    } /*
    else {
      console.log("Request canceled");
    } //*/
  updatepage();
}

function // void
AddAction(f){
    console.log(f);
    let newid=0;
    for (i of reservations) { if (i.id>=newid) newid=i.id+1;}
    let rec={ id: newid }
    for (let myfield of f){
      let elem=document.getElementById(myfield);
      console.log(`Adding ${myfield} = ${elem.value}!`);
      rec[myfield.toLowerCase()] = elem.value;
      if (elem.value==="") {
        alert(`Field ${myfield} has no value`);
        return;
      }
    }
    reservations.push(rec);
    updatepage();
}

function // void
AddNewReservation(){
   let fields = ["Name","Table", "Date", "Time"];
   let output = "<table><caption>New Reservation</caption>";
   for (f of fields) {
     output += `<tr valign=top><td align=right>${f}</td><td><input id='${f}' type=text size=40></td>`;
   }
   let addbutton = "<tr><td colspan=2 align=center><input type=button value='Add reservation' onclick='AddAction("+JSON.stringify(fields)+");'>&nbsp;<input type=button value='Cancel' onclick='updatepage();'></td></tr>";
   console.log(addbutton);
   output += addbutton;
   output += "</table>";
   let e = document.getElementById("ReservationTable");
   e.innerHTML=output;

}

const updatepage = () => {
  let insertbutton = "<p><input type=button value='Add new Reservation' onclick='AddNewReservation();'></p>"
  let output = "<table><caption>reservations</captions>\n";
  output+="<tr style='color: rgb(255,255,0); background-color:rgb(0,0,0);'><th>id</th><th>Reservation on name</th><th>Actions</th></tr>\n";
  for(let rsrvtn of reservations){
    output+=`<tr valign=top><td align=right>${rsrvtn.id}</td><td>${rsrvtn.name}</td><td><input type=button onclick="Modify(${rsrvtn.id});" value="Modify">&nbsp;<input type=button onclick="CancelAsk(${rsrvtn.id});" value="Cancel"></td></tr>\n`    ;
  }
  output+="</table>";
  let e = document.getElementById("ReservationTable");
  e.innerHTML=insertbutton+output+insertbutton;
}

console.log("Manager loaded!")
