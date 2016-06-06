// CALL

// 1.  Invoke an anonymous function.

// Beer array, it's got objects.
var beer = [
  {type: "IPA", name: "Elysian Space Dust"},
  {type: "Pale Ale", name: "GBC Manny's Pale Ale"},
  {type: "Amber Ale", name: "Fishtale Organic Amber Ale"},
  {type: "Citrus IPA", name: "Ninkasi Hop Cooler"},
  {type: "Stout NITRO", name: "Boundry Bay Dry Dry Irish"}
];

function beerTap(){
  // Start for loop...
  for(var i = 0; i < beer.length; i++){

    (function(i) { // function 1, accepts parameter i

      this.print = function(){ // function 2, has a method...
        // THIS in here is the beer object passed in, and i,
        // is the number the for loop is on
        console.log('#' + i + ' ' + this.type + ': ' + this.name)
      }
      this.print(); // invokes, function 1's method, 'this' remains in scope with
      // function 1.
    }).call(beer[i], i) // INVOKES function 1, which passing in i, and changing
    // this, to the beer object in the call parameters.
  }
}

// beerTap();

// 2. Invoke anon with call using a SLL

function heroesNeverDie(){
  this.head = null;

  this.insertHero = function(node){
    if(!this.head){
      this.head = node;
      return this.head;
    }

    var current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
    return this.head;
  }
}

function heroNode(role, name){
  this.role = role;
  this.name = name;
  this.next = null;
}

var hero1 =  new heroNode("Defense", "Widowmaker");
var hero2 =   new heroNode("Defense", "Junkrat");
var hero3 =   new heroNode("Offense", "Soldier 76");
var hero4 =   new heroNode("Offense", "Genji");
var hero5 =   new heroNode("Tank", "D.v.A");
var hero6 =   new heroNode("Tank", "Road Hog");
var hero7 =   new heroNode("Support", "Lucio");
var hero8 =   new heroNode("Support", "Mercy");

var heroList = new heroesNeverDie();

heroList.insertHero(hero1)
heroList.insertHero(hero2)
heroList.insertHero(hero3)
heroList.insertHero(hero4)
heroList.insertHero(hero5)
heroList.insertHero(hero6)
heroList.insertHero(hero7)
heroList.insertHero(hero8)

function rollcall(list){
  if(!list.head){
    console.log("No heros to report.");
    return -1;
  } else {
    var current = list.head;
    while(current){

      (function(){
        this.report = function(){
          console.log(this.name + " reporting! Ready for " + this.role);
        }
        this.report();
      }).call(current);

      current = current.next;
    }
  }
}

// rollcall(heroList);

// 3. Use call to invoke a function, specifying this.

function oneRing(){
  // this is the object passed in with the call method. THE RIIINNNGGG!
  var Galadriel = [ this.name, 'to', this.abilities[0], this.name, this.abilities[1],
  this.name, 'to', this.abilities[2], 'and', this.abilities[3] ].join(' ');

  console.log(Galadriel);

}

var ring = { name: "One Ring",
             abilities: ['rule them all',
                        'find them',
                        'bring them all',
                        'in the darkness bind them'],
             creater: "The Dark Lord Sauron",
             made_in: "Mount Doom"
           }

// oneRing.call(ring);

// 4. Using call to chain contructors.

function sauronsPower(ringOfPower, ringBearer){
  this.ring = ringOfPower;
  this.bearer = ringBearer;
}

function theOneRing(ringOfPower, ringBearer){
  sauronsPower.call(this, ringOfPower, ringBearer);
  this.category = 'Ring of Power';
}

function theNine(ringOfPower, ringBearer){
  sauronsPower.call(this, ringOfPower, ringBearer);
  this.category = 'Rings of Men';
}

function theSeven(ringOfPower, ringBearer){
  sauronsPower.call(this, ringOfPower, ringBearer);
  this.category = 'Rings of Dwarves';
}

function theThree(ringOfPower, ringBearer){
  sauronsPower.call(this, ringOfPower, ringBearer);
  this.category = 'Rings of Elves';
}

var oneRing =  new theOneRing('The One Ring', 'Sauron');
var theNine = new theNine('The Nine', 'kings, sorcerers, and warriors of old');
var theSeven = new theSeven('The Seven', 'Dwarf-lords')
var theThree = new theThree(['Narya, the Ring of Fire',
                             'Nenya, the Ring of Water',
                             'Vilya, the Ring of Air'],
                             ['Elrond', 'Galadriel', 'Gandalf']
                           )

// console.log(oneRing);
// console.log(theNine);
// console.log(theSeven);
// console.log(theThree);


// 5. Using call to specify this

function gitGud(){
  // object being looped through must match the variable name
  for(var key in obj){
    console.log(key);
  }
}

var obj = {'key': 'value'}

// gitGud.call(obj);
