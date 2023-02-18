'use strict';

//<==================================Closure==============================>//

// In JavaScript, closures are defined as inner functions that have access to variables and parameters of outer function even after the outer function has returned.In closure the value of a parameter or arguement retain(store) and we can use that later .

const multiplication = function (a, b) {
  console.log(`You can multiply ${a} and ${b}`); //output => You can multiply 2 and 4

  const c = 6;
  return function () {
    return a * b * c; //output => 48
  };
};

const returnFunction = multiplication(2, 4); //calling
console.log(returnFunction());

// So, in the above code we have closured method .How is this closure ? we'll discuss now
// As we can see that we have a function of "multiplication" with the parameters of "a" and "b" once we have called this function  by "multiplication(2,4)" we got the output " You can multiply 2 and 4" and after that we returned another anonymous function which return a value of "a * b * c" .Once the "multiplication" function returned another function so this function needs to be stored somewhere and we have stored that in "returnFunction" variable .

// So now the function is been stored.Are we gonna be able now to access the values of parameters of "a" and "b" as they been already called .So the answer is YES.This is because javascript retained there value or store there value and we can have an access of these parameteres values which is "2" and "4" .As the return function is part of parent function "multiplication" so it also has an access of variable "c" according to the rules of scope .

// Thus, the values of a and b parameters didn't lost and we used that again in our return function.After all of these discusssion we got the result of "48" in the return function.
