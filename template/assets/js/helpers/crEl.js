'use strict'
/*
* assets/js/helpers/crEl.js
*/
class CrEl {
  constructor(rootdomelt) {
    if (rootdomelt === undefined) {
      this.parent = document.body;
    } else {
      this.parent = rootdomelt;  // { parent: <...> }
    }
  }
  create(tag, upToParent) {
    let child = document.createElement(tag);
    if (typeof upToParent == typeof true) {
      this.parent.parentNode.appendChild(child);
    } else {
      this.parent.appendChild(child);
    }
    let newEl = new CrEl(child);
    return newEl;
  }
  attr(name, value) {
    this.parent.setAttribute(name, value);
    return this;
  }
  inner(content) {
    this.parent.innerHTML = content;
    return this;
  }
  act(element, type, listener) {
    element.addEventListener(type, listener);
  }
}


/* EXAMPLE USAGE:

let div1 = new CrEl().create('div').attr('id','myWrapper');

div1.create('div').attr('id','myContainer')
      .create('h1').inner('Website titel')
    .create('p',true).inner('Test').act(this,'click',(event)=>{console.log("Clicked")});

*/
