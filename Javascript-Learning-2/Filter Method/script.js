'use strict';

// <=============================Filter method in Javascript=============================>//

// Filter is the 2nd method of data-transformation.In filter method we get a new array and in the new array all the new elements are those that  sartisfy the certain condition .

const numbers = [10, 20, 30, -30, -20, -10];

// <=======Positive values====>//

const filterMethod = numbers.filter(function (number) {
  return number > 0;
});
console.log(filterMethod); //output => [10,20,30]

// <=========Negative values=====>//

const newFilterMethod = numbers.filter(number => number < 0);
console.log(newFilterMethod); //output => [-30, -20, -10]

// The filter method also takes the same parameters just like map method method in which first paramter is current element,2nd paramter is current index and 3rd is current completer array .In the above code we get the result of new arrays of those elements which satisfy the certain condition of greater than "0" and less than "0"
