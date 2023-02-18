'use strict';

//<========= At method of Arrays!===========>

// There is an updated method with the name of "At".At method use to take out the element from an array .

const arr = [23, 4, 55];
console.log(arr[1]); //output => 4

// <====At method=====>//

console.log(arr.at(0)); //output => 23

// So we can extract the element from an array by using "bracket-notation" method or by using "At"

//What if we went to get the last element of an array .It can done by using different method .

console.log(arr[arr.length - 1]); //output => 55
console.log(arr.slice(-1)[0]); //output => 55
console.log(arr.at(-1)); //output => 55
