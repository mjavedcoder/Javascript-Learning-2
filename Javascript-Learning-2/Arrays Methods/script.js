'use strict';

// <==============Methods in Arrays=============>//

// There are many methods of arrays in javascript that we'll talk about here :
// Arrays method includes:

// 1)Slice method
// 2)Splice method
// 3)Reverse method
// 4)Join method
// 5)Concat method

// <======Slice Method=======>//
const arr = ['a', 'b', 'c', 'd'];
arr.slice(0);
arr.slice(1, 2);
console.log(arr.slice(0)); //output => ['a', 'b', 'c', 'd']
console.log(arr.slice(1)); //output => ['b', 'c', 'd']
console.log(arr.slice(1, 2)); //output => ['b']
console.log(arr.slice(1, 3)); //output => ['b', 'c']
console.log(arr.slice(-1)); //output => ['d']
console.log(arr.slice(-2)); //output => ['c', 'd']
console.log(arr.slice(1, -2)); //output => ['b']
// In slice method we extracted the elements from an array.As we know that arrays are "0" based and the last element of an array doesn't count.This is the reason, the result of "arr.slice(1, 2)" is just "b".The other thing which is noticeable in slice method is that it does not mutate or change the original array,like after slicing the elements from an array the original array keep same.As we have declared the end paramter in the above code examples and can see that the end parameter or index does not count just like string .

//<===========Splice Method===========>//
console.log(arr.splice(0)); //output => ['a', 'b', 'c', 'd']
console.log(arr); //output => []

// The splice method is just like slice method but but the only difference is that it mutate the original array and we have seen that in above . As we have splice from 0 position and it extracted all the rest of elements and after checking the original array the result is empty array [].

//<============Reverse Method============>//

const arr1 = ['e', 'd', 'c', 'b', 'a'];
console.log(arr1.reverse()); //output => ['a', 'b', 'c', 'd', 'e']
// Reverse method actually reverse the the elements of original array .

// <=======Concat=========>//

const arr2 = [1, 2, 3, 4];
const arr3 = [5, 6, 7];
console.log(arr2.concat(arr3)); //output => [1, 2, 3, 4, 5, 6, 7]

//Concat method use to join the arrays together.

// <====Join====>
console.log(arr2.join('-')); //output => 1-2-3-4

// In join method the result is string with the separator "-" which wehave assigned above .
