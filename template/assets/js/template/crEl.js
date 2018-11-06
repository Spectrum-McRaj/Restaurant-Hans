class CrEl {
  constructor(rootdomelt) {
    if (rootdomelt === null) {
      this.parent = document.body;
    } else {
      this.parent = rootdomelt;  // { parent: <...> }
    }
  }
  create(tag) { //Create Element
    let child = document.createElement(tag);
    this.parent.appendChild(child);
    let newEl = new CrEl(child);
    return newEl;
  }
  attr(name, value) { //Set Attribute
    this.parent.setAttribute(name, value);
    return this;
  }
  inner(content) { //Add inner HTML to element
    this.parent.innerHTML = content;
    return this;
  }
}
