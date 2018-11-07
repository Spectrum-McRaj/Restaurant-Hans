'use strict';
/*
* assets/js/helpers/glob.js
*/
(() => {
// our one & only global _glob
  try{ // Node.js?
    global['_glob'] = {};
  }catch( error ){ // Browser
    window['_glob'] = {}
  }
})();

class Glob {
  constructor() {
    this.vars = {};
    this.functions = {};
    this.objects = {};

    return this
  }
}


function glob( element, key, val ){
  let glob =  _glob[ element ] ? _glob[ element ] : new Glob()[ element ]
  //let glob_el = _glob[ element ]
  if( key) {
    if( val) {
      glob[ key ] = val;
      _glob[ element ] = glob;
    } else{

      return _glob[ element ][ key ];
    }
  }
  //console.log( glob );
  return _glob[ element ]
}
