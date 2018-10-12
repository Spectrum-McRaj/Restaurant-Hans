"use strict";
//import {Consumable} from './Consumable';
function objectId(id,type){
  return "1234rfd";
}
let Consumable = require('./consumable');
let Ingredient = require('./ingredient');
let consumables = [];
let ingredients = [];



function newCons(){
  console.clear();
  let input = document.getElementById("input1").value;
  let newObj = new Consumable({id:objectId(input,"menuItem"), name:input, price:3, status:"sold out", ingredients:[["name", 3]["name1", 5]], type:"air", discription:"bla bla bla di bla bla bla..." });
  consumables.push(newObj);
  for(let i = 0; i < consumables.length; i++){
    console.log("menu item " + (i+1) + ": " + consumables[i].name);
  }
}

}
function main() {
  let newObj = new Consumable({id:"wvfw", name:"cola", price:3, status:"sold out", ingredients:"none", type:"air", discription:"bla bla bla di bla bla bla..." });
  consumables.push(newObj);
  console.log("new item: " + newObj.name/* + newObj.toString(", ")*/);
}
