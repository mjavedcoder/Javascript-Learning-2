'use strict';

// <============Select an element================>//

// <===========================Select Elements============================>//

// How to select the entire document(HTML) page ?

console.log(document.documentElement); //Selecting the entire html page

console.log(document.head); //For selecting the head of html
console.log(document.body);

// These above are special kind of elements in which we do not need to use any kind of selector or queryselector .//

// How to select elements from Html or to select the css elements for styling ?//

document.querySelector(h1); //To select the element from an html
document.querySelector('.heading'); //To select the class from an html
document.querySelector('#Para'); //To select an id element
document.querySelectorAll('.heading'); //To select multiple elements with the same class

// document.getElementById('Para'); //To select an id,but we don't use "#" symbol with it or without selector.

document.getElementsByClassName('heading'); //to select any of the class elemnt withot the selector

document.getElementsByTagName('button'); //This will select all the elements with the class name of button
