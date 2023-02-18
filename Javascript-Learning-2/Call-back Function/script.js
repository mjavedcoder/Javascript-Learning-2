'use strict';

// <==============Call-Back Function and Higher-Order Function======================>

// A function that receives another function as an arguement or return another fucntion or both is called higher order function.Here in our case below the "higherOrderFunction"  is  higher order function.In which "higherOrderFunction" receives "oneWord" and "firstWord" function individually .Here in other words we have passed the functions "oneWord" and "firstWord" as an arguement to "higherOrderFunction".A function that is passed in is "call-back" function and we have "oneWord "and "firstWord" as call-back function.Remember that functions are objects and many objects in javascript has method(function attached to the object).

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); //Here we used regular expression of global"g" in which we replaced the spaces in the string with an empty string or we have removed the spaces
};

const firstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const higherOrderFunction = function (str, fn) {
  console.log(`Transformed string:${fn(str)}`);
  console.log(`Original string:${str}`);
};

higherOrderFunction('Home is the best', firstWord); //output => HOME is the best
higherOrderFunction('Home is the best', oneWord); //output => homeisthebest

const punch = function () {
  console.log('👊');
};

document.body.addEventListener('click', punch);

// So in the above case the "addEventListener" is higher order function as it receives another function of "punch" as an arguement.Although "punch" is call-back function which is been called everytime whenever the click event happens.So you can see that call-back function has so importance as the "addEventListener" doesn't know by itself what should do after clicking,this is "punch" call-back function which tells exactly what to do .
