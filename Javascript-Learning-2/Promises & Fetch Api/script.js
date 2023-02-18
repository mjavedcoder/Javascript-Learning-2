'use strict';

// <========================Promises & Fetch Api==========================>//
// A promise is a container for the future values .The response coming from Ajax calls is the value.When we callig the Ajax we don't have value but we know that we'll have values in the future .By using promises we no longer need to rely on events or call-back functions to handle the asynchronous results .In other words promise is "Promise of code execution".The main purpose of promise is to get the parallel execution .The syntex of promise is:

let promise = new Promise(function (resolve, reject) {
  resolve(12);
}); //So, promise always should be fullfilled and in fullfill we have two conditions which are that promise should be resolve or rejected but it shouldn't be pending .

//1st method to Ajax-calls:
// const getCountryData = function (country) {
//   const data = new XMLHttpRequest(); //==> We have called this function and stored it in variable
//   data.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   data.send();
// };

// 2nd Method to Ajax-calls:
const getCountryData = fetch(`https://restcountries.com/v3.1/name/pakistan`);
console.log(getCountryData); //output is "Promise"

// So above we have used Promise to fetch the data or to send the request to get the data from the server .This is an Es6 feature and in so much demand this time .
