// fake stuff to test

let reservations = []
// /*
for (i=0;i<Math.random()*200;i++) reservations.push( { id:i, name:"Mr Nummer"+i } );
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

const CancelR = (id) => {
  let rmv=undefined;
  for(let i in reservations){
    if (reservations[i].id===id) rmv=i;
  }
  if (rmv===undefined) { alert(`Record #${id} does not exist`); return; }
  if (confirm(`Are you sure you want to cancel reservation #${id}?`)) {
    /*
      let dr = reservations.slice(rmv,1);
      console.log(`${dr.length} records removed at index ${rmv}`);
      console.log(`${reservations.length} entries left!`)
      */
      let newr=[]
      for(let i in reservations) if (i!=rmv) newr.push(reservations[i]);
      reservations=newr;
    } else {
      console.log("Request canceled");
    }
  updatepage();
}

const updatepage = () => {
  let output = "<table><caption>reservations</captions>\n";
  output+="<tr style='color: rgb(255,255,0); background-color:rgb(0,0,0);'><th>id</th><th>Reservation on name</th><th>Actions</th></tr>\n";
  for(let rsrvtn of reservations){
    output+=`<tr valign=top><td align=right>${rsrvtn.id}</td><td>${rsrvtn.name}</td><td><input type=button onclick="Modify(${rsrvtn.id});" value="Modify">&nbsp;<input type=button onclick="CancelR(${rsrvtn.id});" value="Cancel"></td></tr>\n`    ;
  }
  output+="</table>";
  let e = document.getElementById("ReservationTable");
  e.innerHTML=output;
}

console.log("Manager loaded!")
