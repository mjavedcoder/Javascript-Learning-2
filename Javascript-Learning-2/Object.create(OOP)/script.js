'use strict';

// <===================Object.create(OOP)=================>//

// "Object.create" is the third way after (constructoring function and classes ) of implementing prototype inheritance .It works preety different way than constructor function and class .There is not any constructor function and new operator instead we use "Object.create" . In this we can manually set the prototype of an object to any other object that we want.Here we will use "Proto" keyword after our desireable objest name which stands for prototype.

const SportsProto = {
  Games() {
    console.log(`Qas likes to play ${this.firstGame}`);
  },
}; //this object is literally gonna be the prototype of all the objects created from "SportsProto"

// // const Games1 = Object.create(SportsProto);
// console.log(Games1); //output => {} [[Prototype]]: Object

// So this "Games1" is the empty object which is linked to "SportsProto" object who is it's prototype too.It also includes with the "Games" function in the above "SportsProto"'s object.

// Now we would assign the values to the "Games1" object:

const Games1 = Object.create(SportsProto);
Games1.firstGame = 'Cricket'; //set properties to object "Games1"
Games1.Games(); //output => Qas likes to play Cricket

console.log(Games1.__proto__ === SportsProto); //output => true

// So, the main takeaway from this function is that "Object.create" creates a new object(Games1) and the prototype of that object will be equal to the object we are passing in(SportsProto).
