'use strict'
/*
* assets/js/modules/table.js
* TODO : build module; add functions (overview, view, add, update & delete) to let things happen
*/
function mainTable(){
  overviewTable();
}
/* -----------------------------------------------------------------------------
* overview
*/
function overviewTable(){
  console.log("overviewTable says hi");
}
/* -----------------------------------------------------------------------------
* view
*/
function viewTable(){
  console.log("viewTable says hi");
}
/* -----------------------------------------------------------------------------
* add
*/
function addTable(){
  console.log("addTable says hi");
}
/* -----------------------------------------------------------------------------
* delete
*/
function deleteTable(){
  console.log("deleteTable says hi");
}
/* -----------------------------------------------------------------------------
* get
*/
function getTable( id ){
  for( let table of _glob.arr.tables ) if( table.id === id/1 ) return table;
}
