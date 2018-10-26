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
    document.getElementById("output").innerHTML += ("ingredient " + (i+1) + ": name: " + ingredients[i].name + ", price : €" + ingredients[i].price + ", in stock:" + ingredients[i].inStock + " " + ingredients[i].unit + "</br>");
    }
    console.log("for loop complete");
}

function newIngr(){
  let inputName = document.getElementById("nameIngr").value;
  console.log("input name: " + inputName);
  let inputStock = document.getElementById("stock").value;
  console.log("input stock: " + inputStock);
  let inputPrice = document.getElementById("priceIngr").value;
  console.log("input price: " + inputPrice);
  let inputUnit = document.getElementById("unitInput").value;
  console.log("input unit: " + inputUnit);
  let arrIngr = {id: (inputName + "123456"),
                 name: inputName,
                 price: inputPrice,
                 inStock: inputStock,
                 unit: inputUnit};
  ingredients.push(new Ingredient(arrIngr));
  console.log("ingredient class instence made and pushed to the array");
  show();
  console.log("button handler succesfully finnished");
}
