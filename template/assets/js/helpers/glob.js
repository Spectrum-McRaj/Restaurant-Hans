'use strict';
/*
* assets/js/helpers/glob.js
*/
// our one & only global _glob
try{ // Node.js?
  global['_glob'] = {};
}catch( error ){ // Browser
  window['_glob'] = {}
}
function globVars(){
  // voeg hier gewenste globals toe
  this.vars = {};
  this.functions = {};
  this.objects = {};

  return this
}
function glob( element, key, val ){
  let glob =  _glob[ element ] ? _glob[ element ] : new glob()[ element ]
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
// -----------------------------------------------------------------------------
/*
//glob();

//_glob.vars[ 'foo' ] = 'bar';
glob( 'vars', 'foo', 'bar'); // aanmaken
console.log( glob( 'vars' ) )
_glob.vars[ 'foo' ] = 'bar2';
//glob( 'vars', 'foo', 'bar2'); // wijzigen
console.log( glob( 'vars' ) )
 _glob.vars[ 'foo2' ] = _glob.vars[ 'foo' ];
//glob( 'vars', 'foo2', glob( 'vars', 'foo' ) ); // aanmaken/opvragen
console.log( glob( 'vars' ) );
// _glob.func[ 'foo_' ] = ()=>{ console.log('foo_') }
glob( 'func', 'foo_', () => { // functie aanmaken
  console.log('foo_');
});
 _glob.func[ 'bar_' ] = () => {
   console.log('bar_')
}
function foo_(){
  _glob.func.foo_(); // functie oproepen
  _glob.func.bar_();
}
foo_();
