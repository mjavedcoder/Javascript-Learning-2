'use strict';

// <=============Constructor Functions (OOP)=================>//

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
