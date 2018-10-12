"use-strict";
function objectId(id,type){
  return "1234rfd";
}

//Menu item === consumable
module.exports = class Consumable {
  constructor(data) {
    this.id = objectId(data.id, "consumable");
    this.name = data.name;
    this.price = data.price;
    this.status = data.status;
    this.ingredients = data.ingredients; //is array of id's
    this.type = data.type;
    this.description = data.description;
  }

  get healthInfo() {
    for (let ingredient of datbase.ingredients) {
      //get health info for ingredient
    }
  }
  used(ingredients){
    for(ingredient of this.ingredients){
      //TODO for enz.
    }
    return returN;
  }
}

/*class Drinks extends Consumable {

}*/
