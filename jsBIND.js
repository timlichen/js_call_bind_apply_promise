// BIND

function BINDER(){
  this.x = 9;

  var module = {
    x: 81,
    getX: function() { return this.x }
  };
  // console.log(module.getX());
  var retrieveX = module.getX;
  // console.log( retrieveX() )
  var boundGetX = retrieveX.bind(module);
  // console.log( boundGetX() )
}

function boundInDarkness(){

  this.task = 'Rule middle earth'; // Outer function

  var theFellowship = {
    task : 'Throw the one ring into Mt. Doom',
    fellowship: function(){ return this.task } // inner function
  };

  var sauron = theFellowship.fellowship; // stored function, uses outer this
  console.log( sauron() ); // invoke function, RULE MIDDLE EARTH

  // store the already stored function, this time binding the scope of the inner
  // to the object the inner function is located.
  var freePeoplesofMiddleEarth = sauron.bind(theFellowship);
  console.log(freePeoplesofMiddleEarth());

}

// boundInDarkness();



BINDER();

function list() {
  return Array.prototype.slice.call(arguments);
}
var list1 = list(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(undefined, 37);
var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1,2,3);

// console.log( list1 )


function secondList(){
  return Array.prototype.slice.call(arguments);
}

var list = secondList(1,2,3);
console.log(list);
