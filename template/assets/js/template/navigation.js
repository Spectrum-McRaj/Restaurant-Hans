"use-strict";

function buildHeaderNav() {
  let navroot = new crEl( document.getElementById("primary-navigation") );

  let nav = navroot.create("nav").attr("id","primary-blabla");
  let h1 = nav.create("h1").attr("class","title").inner("Molveno Restaurant");
  let ul = nav.create("ul");
};

console.log("navigation test");

window.onload = function() {
  buildHeaderNav();
};
