temp_database = require("./temp_database");

module.exports = (entry,datatable)=>{
  // TODO: Generate unique number based on the requested table!
  temp_database[datatable] = temp_database[datatable] || [];
  let tab = temp_database[datatable];
  let id = tab.length;
  tab[id]=entry;
  return id;
} // temp!
