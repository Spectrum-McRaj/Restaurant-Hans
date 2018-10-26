// fake stuff to test

let reservations = []
// /*
for (i=0;i<Math.random()*200;i++) reservations.push( { id:i, name:"Mr Nummer"+i } );
const getByID=(id)=>{
  for(let r of reservations) if (r===r.id) return r;
  throw new Exception("No record on that number!")
}

// */


const Modify = (id) => {
  let r;
  try{
    r = getByID(id);
  } catch(e) {
    alert("that id does not exist!");
  }
  alert("Modify feature not yet implemented!\nPlease combe back later!")
}

const CancelR = (id) => {
  let rmv=undefined;
  for(let i in reservations){
    if (i===id) rmv=i;
  }
  if (rmv===undefined) { alert(`Record #${id} does not exist`); return; }
  if (confirm(`Are you sure you want to cancel reservation #${id}?`)) reservations.slice(rmv,1);
  updatepage();
}

const updatepage = () => {
  let output = "<table><caption>reservations</captions>\n";
  output+="<tr><th>id</th><td>Reservation on name</th><th>Actions</th></tr>\n";
  for(let rsrvtn of reservations){
    output+=`<tr valign=top><td align=right>${rsrvtn.id}</td><td>${rsrvtn.name}</td><td><input type=button onclick="Modify(${rsrvtn.id});" value="Modify">&nbsp;<input type=button onclick="CancelR(${rsrvtn.id});" value="Cancel"></td></tr>\n`    ;
  }
  output+="</table>";
  let e = document.getElementById("ReservationTable");
  e.innerHTML=output;
}

console.log("Manager loaded!")
