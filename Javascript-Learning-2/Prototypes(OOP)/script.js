'use strict';

// <===================Constructor-Functions=================>//

// We use constructor functions to build the objects using functions .The only difference between the constructor function and the regular function is just "new" keyword .

const Sports = function (firstSport, secondSport) {
  console.log(this); //output => Sports {}
  this.firstSport = firstSport; //This is an empty object and have property and value here
  this.secondSport = secondSport; //This is an empty object and have property and value here
};

const Games = new Sports('Cricket', 'Hockey');
console.log(Games); //output => Sports {firstSport: 'Cricket', secondSport: 'Hockey'}

// In the above code we have used construcor function and the constructor function starts with a capital letter and im our case that is "Sports" which start with the capital letter "S".As this is a constructor function so it will be called with the "new" keyword. The "new" keyword has really importance in constructor functions .It actually produce below result .

// 1)New empty object ({}) is been created
// 2)"new" keyword call the function and this={} =>It means "this" keyword is equal to an empty object
// 3){} linked to prototype .
// 4)Function automatically return the object {} but it will not be empty.

// We also get to see above that when we console.log(this)  we get the empty object so it is proved that "new" keyword gives the empty object.As "this" is an empty object so we have given the two properties(firstSport,secondSport) with the values of firstSport and secondSport.The reason of taking same property name just like the paramter is coz this is the convention and recommeded to use.Although we can use any different names too but that is not recommended .

// We got the object with the name of "Sports" which has two values "Cricket" and "Hockey". So with the help of constructor function we were able to produce an object and we can produce as many objects as we want .

const Games1 = new Sports('Chess', 'Kabaddi');
console.log(Games1); //output => Sports {firstSport: 'Chess', secondSport: 'Kabaddi'}

const Games2 = new Sports('Ludo', 'Football');
console.log(Games2); //output => Sports {firstSport: 'Ludo', secondSport: 'Football'}

// This is how we can have as many objects as we want and this all is coz of the constructor function.

// <===================Prototypes(OOP) in javascript=================>//

// Each and every function in javascript includes "prototype",weather it's normal function or a constructor function .All the objects which has been created with the help of constructor function also have all the acces to the methods or functions which are in the prototype of constructor function.For example, in the given below code we have "Sports" which is a constructor function and it has prototype property and we add a function "favSport" with this prototype property .You can say also say that we add a method in an object "Sports.prototype".

Sports.prototype.favSport = function () {
  console.log(`Qas likes to play ${this.firstSport} and ${this.secondSport}`);
};

Games1.favSport(); //output => Qas likes to play Chess and Kabaddi

//As we discussed earlier that objects created from constructor function have an access to method or function attached to it.So "favSport" is a function in the prototype property of constructor function "Sports".So,In the result we got "Qas likes to play Chess and Kabaddi".Same is the case with the other object of "Games2".In other words all the objects using the constructor function reuse the function on themselves .

Games2.favSport(); //output => Qas likes to play Ludo and Football
//Prototype of "Games1" and "Games2" is "Sports.prototype" and we can check this with one of the property of object "underscore-underscore-proto-underscore-underscore" i.e
console.log(Games1.__proto__); //So prototype of "Games1" and "Games2" object is the prototype property of constructor function.i.e
console.log(Games1.__proto__ === Sports.prototype); //true
