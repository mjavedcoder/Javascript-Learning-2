'use strict';

// <==================setTimeout and setInterval===============>//

//<=================================setTimeout===================================>:

// setTimeout use to schedule one function to run after a particular time :

setTimeout(function () {
  console.log('Hey this is 2nd month of learnig Javascript');
}, 1000);

// This callback function is the first arguement of setTimeout function and we can call this function in the future by adding 2nd arguement of particular or desireable time .So in our case above the console will be log after every 1sec as we know that 1sec=1000ms .We can give this time whatever we want but it will be always in the form of milliseconds.It means we have schedule this function to be called for 1sec .

setTimeout(function () {
  console.log('Hey Javascript !');
}, 1000);
console.log('waiting...');
//output =>
// waiting...
// Hey Javascript !

// In the above code we get to know that the code execution does not stop once the function has been called . First Javascript reach the first arguement or callBack fucntion and it keeps counting the time in the background .While it's counting the time in background it will execute the other "console" which in our case in "waiting" .So as soon the particular time counts it execute that call-back function and this mechanism is call asynchoronus javascript .

// How can we pass more argement to this callback funciton .As this not that function which is been calling by us.Infact, this is the function which is been calling by setTimeout function .So we can not pass the arguements by using parenthesis and call that function with that name with parenthesis ().So this problem has been solve by setTimeout.

setTimeout(
  function (firstName, lastName) {
    console.log(`My name is ${firstName} ${lastName}`);
  },
  1000,
  'qas',
  'javed'
);
//output => "My name is qas javed"

// <========================================set-interval==================================>//

// If we want to run our function again and again we can use set-interval:

setInterval(function () {
  console.log('Hey this is amazing');
}, 1000);

//OUTPUT => "Hey this is amazing";

// In the above code we have used to setInterval.The callback function will be called after every 1sec .
