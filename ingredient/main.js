"use strict";
//import {Consumable} from './Consumable';
function objectId(id,type){
  return "1234rfd";
}
//let Consumable = require('./consumable');
//let Ingredient = require('./ingredient');
let ingredients = [];

function show(){
    document.getElementById("output").innerHTML = "ingredients: </br>";
    console.log("in show()");
    for(let i = 0; i < ingredients.length; i++){
    document.getElementById("output").innerHTML += ("ingredient " + (i+1) + ": name: " + ingredients[i].name + ", price : €" + ingredients[i].price + ", id: " + ingredients[i].id + ", unit: " + ingredients[i].unit + "</br>");
    }
    console.log("for loop complete");
}

function newIngr(){
  let inputName = document.getElementById("nameIngr").value;
  console.log("input name: " + inputName);
  let inputPrice = document.getElementById("priceIngr").value;
  console.log("input price: " + inputPrice);
  let inputUnit = document.getElementById("unitInput").value;
  console.log("input unit: " + inputUnit);
  let arrIngr = {id: (inputName + "123456"),
                 name: inputName,
                 price: inputPrice,
                 inStock: 0,
                 unit: inputUnit};
  ingredients.push(new Ingredient(arrIngr));
  console.log("ingredient class instence made and pushed to the array");
  show();
  console.log("button handler succesfully finnished");
}
function deleteIng(){
  let input = prompt("please enter the ingredient name");
  console.log("input = " + input);
  for(let i = 0; i < ingredients.length; i++){
    if(ingredients[i].name == input){
      let confirmString = "do you want to delete: " + ingredients[i].name + " with id: " + ingredients[i].id + "?";
      console.log("confirm string: " + confirmString);
      if(confirm(""+confirmString)){
        ingredients.splice(i, 1);
        show();
        return;
      }
    }
  }
  alert("sorry can't find an ingredient with the name: " + input);
}
