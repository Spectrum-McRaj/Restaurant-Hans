"use strict";
//import {Consumable} from './Consumable';
function objectId(id,type){
  return "1234rfd";
}
//let Consumable = require('./consumable');
//let Ingredient = require('./ingredient');
let consumables = [];
let che = 0;
function show(){
    document.getElementById("output").innerHTML = "menu item: </br>";
    console.log("in show()");
    for(let i = 0; i < consumables.length; i++){
    document.getElementById("output").innerHTML += ("Menu item " + (i+1) + ": Name: " + consumables[i].name + ", Price: €" + consumables[i].price + ", type: " + consumables[i].type + ", id: " + consumables[i].id + ", ingredients: " + consumables[i].ingredients + "</br>");
    }
    console.log("for loop complete");
}
function testbla(){
  che++;
  console.log("checked" + che);
}
function newCons(){
  //console.log("ingredient: " + document.getElementById("inputDrop").value + "    amount: " + document.getElementById("amountIngr").value);
  let inputName = document.getElementById("name").value;
  console.log("input name: " + inputName);
  let inputPrice = document.getElementById("price").value;
  console.log("input price: " + inputPrice);
  let inputType = document.getElementById("type").value;
  console.log("input type: " + inputType);
  let dropInputValue = document.getElementById("inputDrop").value;
  console.log("input ingredient: " + dropInputValue);
  //console.log(dropInputValue);
  let newObj = new Consumable({id:objectId(inputName,"menuItem"),
                                           name:inputName,
                                           price:inputPrice,
                                           status:"sold out",
                                           ingredients:[[document.getElementById("inputDrop").value,document.getElementById("amountIngr").value]],
                                           type:inputType,
                                           discription:"bla bla bla di bla bla bla..." });
  consumables.push(newObj);
  console.log("consumable class instence made and pushed to the array");
  //ingredients.push([document.getElementById("inputDrop").value + "    amount: " + document.getElementById("amountIngr").value]);
  show();
  console.log("button handler succesfully finnished");
  /*for(let i = 0; i < ingredients.length; i++){
    console.log("ingredient " + (i+1) + ": " + ingredients[i]);
  }*/
}
function deleteItem(){
  let input = prompt("please enter the item name");
  console.log("input = " + input);
  for(let i = 0; i < consumables.length; i++){
    if(consumables[i].name == input){
      let confirmString = "do you want to delete: " + consumables[i].name + " with id: " + consumables[i].id + "?";
      console.log("confirm string: " + confirmString);
      if(confirm(""+confirmString)){
        consumables.splice(i, 1);
        show();
        return;
      }
    }
  }
  alert("sorry can't find an item with the name: " + input);
}
