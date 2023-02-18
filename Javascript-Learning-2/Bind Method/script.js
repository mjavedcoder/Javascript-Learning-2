'use strict';

//<==================================Bind Method==============================>//

// Bind method in javascript binds the function with an object or vice versa and create a new function .Bind method does not invoke the function directly but gives you the copy of that method or function to invoke or call that later .

const Qasim = {
  brand1: 'Zara',
  brand2: 'NorthFace',
};

function binding() {
  console.log(`Qas loves to wear ${this.brand1} and ${this.brand2}`);
}

// In the above code we have function of "binding" and an object of "Qasim" . If we gonna call the "binding" function separately it will not be called because we don't have any values of "brand-1" and "brand-2" but we can bind this function of "binding" with the object "Qasim" and can create a new function.

const result = binding.bind(Qasim);
console.log(result);
result(); //output => Qas loves to wear Zara and NorthFace

// Here we can see that bind method takes "Qasim" object as a first arguement and creates a new function of "result" .
