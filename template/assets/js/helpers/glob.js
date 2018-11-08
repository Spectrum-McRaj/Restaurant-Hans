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
    this.func = {};
    this.obj = {};

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
/*

glob( 'vars', 'foo', 'bar'); // aanmaken
console.log( glob( 'vars' ) )


glob( 'vars', 'bar', _glob.vars.foo ); // aanmaken/opvragen
console.log( glob( 'vars' ) );

glob( 'func', 'foo', ( show ) => { // functie aanmaken
  console.log( show );
});

glob( 'obj', 'bar', {
  foo: 'bar',
  bar: 'foo'
});

for( let item of Object.getOwnPropertyNames( _glob.obj.bar ) ){
  _glob.func.foo( _glob.vars[ item ]  ); // functie oproepen
}
console.log( _glob )
*/
