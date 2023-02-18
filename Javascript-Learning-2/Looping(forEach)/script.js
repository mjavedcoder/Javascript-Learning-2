'use strict';

// <=========Looping Arrays:forEach=======>

const values = [10, 11, 12, 13];

for (const value of values) {
  if (value > 10) {
    console.log(`Yes,your age is ${value}`);
  } else {
    console.log(`No,your age is ${value}`);
  }
} //output =>
//No,your age is 10
// 9 Yes,your age is 12
// 9 Yes,your age is 11
// 9 Yes,your age is 13

//The above code is just the looping with the for-off method and we have already discussed about this earlier.The for-off of looping is actually the replacement of looping arrays with the condition (i=10,i<15,i++)

// <=====================forEach=======================>//

values.forEach(function (value) {
  if (value > 10) {
    console.log(`Yes,your age is ${value}`);
  } else {
    console.log(`No,your age is ${value}`);
  }
}); //output =>
//No,your age is 10
// 9 Yes,your age is 12
// 9 Yes,your age is 11
// 9 Yes,your age is 13

// We can loop the arrays with the method of "forEach".If you see the above code then we'll get to know that "forEach" actualy requires callback function.So this is forEach method which is going to be call this function and then the value of that function is been passed to forEach.As the forEach method calls this call-back function,in each iteration(repeat) it will pass the current element of an array as an arguement and we have specified that elemnt by "value" above so whenever this call-back function is been called it receives the current element of an array as an arguement.
// In other words we use callback to tell the other higher order function that what to do.

// <========How can we access the index of elements in arrays in this forEach method=======>

// Whenever the callback function is been called with the help of "forEach" method then not the elements been passed to that function but also the index and arrays been passed too .For example "forEach.values(value,index,array)" .The first parameter alweays needs to be current element and 2nd parameter needs to be current index and the 3rd parameter needs to be the entire array that we looping into .

for (const [i, value] of values.entries()) {
  if (value > 10) {
    console.log(`Value ${i + 1}:Yes,your age is ${value}`);
  } else {
    console.log(`Value ${i + 1}:No,your age is ${value}`);
  }
}
//output =>
//  Value 1:No,your age is 10
//  Value 2:Yes,your age is 11
//  Value 3:Yes,your age is 12
//  Value 4:Yes,your age is 13

// The above code we used to get the index of elements in an array with the method of for-off loop .In this method the first parameter is always the index and the 2nd parameter is the element.

values.forEach(function (value, i, arr) {
  if (value > 10) {
    console.log(`Value ${i + 1}:Yes,your age is ${value}`);
  } else {
    console.log(`Value ${i + 1}:No,your age is ${value}`);
  }
});
//output =>
//  Value 1:No,your age is 10
//  Value 2:Yes,your age is 11
//  Value 3:Yes,your age is 12
//  Value 4:Yes,your age is 13

// The above code is to get the index of an element in an array by using "forEach" method .So which method of looping we should have to use ?This all depends on personal preference.
