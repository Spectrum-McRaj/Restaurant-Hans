"use-strict";
function objectId(id,type){
  return "1234rfd";
}

//Menu item === consumable
/*module.exports = */class Consumable {
  constructor(data) {
    this.id = objectId(data.id, "consumable");
    this.name = data.name;
    this.price = data.price;
    this.status = data.status;
    this.ingredients = data.ingredients; //is array of id's
    //console.log("in constructor: ");
    //console.log(this.ingredients);
    this.type = data.type;
    this.description = data.description;
  }

  get healthInfo() {
    for (let ingredient of ingredients) {
      //get health info for ingredient
    }
  }
  used(ingredients){
    /*
    [ingerdients] komt binnen
    checkt het de ingerdients die deze consumable nodig heeft
    dan vermindert hij de stock value van de paremeter ingerdients array met de hoeveelheid die deze consumable nodig heeft
    dan returnt hij de niewe vorm van de parameter array
    */
  }
}

/*class Drinks extends Consumable {

}*/
