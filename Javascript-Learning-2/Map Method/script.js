'use strict';

// <=============================Map method in Javascript=============================>//
// There are some of the data transformation methods in javascript which includes "map","filter" and reduce .Here we are going to discuss about map .
// Map is a method which returns a new array everytime and the returning array elements will be the result of after applying an operation or in other words,array elements will be containing the results of applying an operation on all original array elements .

// const map=[1,2,3,4]
// map+2 => [3,4,5,6]

// In the above example we have applied the add operation and return a new array in which new elements contain the result of after applying the add operation .

// Now we'll discuss a real value .
// const changeValue = 2;
// const numbers = [20, 30, 40, 50];

// const transformValues = numbers.map(function (number) {
//   return number * changeValue;
// });
// console.log(transformValues); //output => [40, 60, 80, 100]
// console.log(numbers); //output => [20, 30, 40, 50]

// In the above example of mapping we have transform the original arrays values by using the "*" multiply operation .If we see above we'll get to know that the map method is same like forEach method.In Map method we use call-back function and this also take the parameters same like forEach .The first value is the current element,2nd value is current index and 3rd value is current array .You can also see that original array has never been mutate after calling the map method .So the mep method always a new array with new elements .We have stored that map function in "transformValues" because it always return a new array so this is why we hae used "const transformValues" in above .

// We can simplify this callback function to arraow function too .

const changeValue = 2;
const numbers = [20, 30, 40, 50];

const transformValues = numbers.map(number => number * changeValue);

console.log(transformValues); //output => [40, 60, 80, 100]
console.log(numbers); //output => [20, 30, 40, 50]

// Arrow function is more cleaner than using regular function syntex .But it all depends on personal preference .

// <=======How to access the index of elements by using map method=========>//

const values = [10, 11, 12, 13];
const mapChange = values.map(function (value, i, arr) {
  if (value > 10) {
    return `Value ${i + 1}:Yes,your age is ${value}`;
  } else {
    return `Value ${i + 1}:No,your age is ${value}`;
  }
});

console.log(mapChange); //output =>  ['Value 1:No,your age is 10', 'Value 2:Yes,your age is 11', 'Value 3:Yes,your age is 12', 'Value 4:Yes,your age is 13']

// In above, we have seen that map method is just like forEach and we get the same result just forEach method .In map method we not gonna "console" altought we'll use "return". So there is big difference between the "forEach" and "map",before we were printing the each line individually an that was visible in the console but in the map method we returned  each of the string from call-back function .That's why this perfomance of "forEach" is called side effects of "forEach" method.In the map method we get the full array with the new elements but not the elements one by one .
// There is no any kind of side-effects in map method .
