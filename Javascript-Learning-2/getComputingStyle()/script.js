'use strict';

// <============getComputingStyle() function in Javascript================>//

// getComputed is used to get the computed value of any style element.In this was we can to any of the css property .

const Cs = document.querySelector('.box');

console.log(getComputedStyle(Cs).color); //output=> rgb(232, 230, 227)

// In the above code we have selected the html element with the class name "box"  then stored that in one of the variable,then after that we have used computing style function.

// If we see our styling we get to know that our color value was "red" but when we have used this computing function we get the value in the form of "rgba"
