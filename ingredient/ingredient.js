"use strict"

/*module.exports = */class Ingredient{
  constructor(data){
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.inStock = data.inStock;
    this.unit = data.unit;
    this.allergies = data.allergies;
    this.types = data.types;//holds an array of all its types("meat", "pork") the precise way its submitted to this var will have to be desidet
    console.log("ingredient with id " + this.id + ": arrived at the end of the constructor");
  }
  used(amount){
    this.inStock -= amount;
  }
  addStock(amount){
    this.inStock += amount;
  }
}
