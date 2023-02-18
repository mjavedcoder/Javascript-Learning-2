'use strict';

//<===================Event Propagation(Bubbling & Capturing)==================>//

// Event propagation is something in which see that how eveents travels all over the dom .The event propagation is of two types. First, is event bubbling and the second  is event capturing.

// In even Bubbling the cycle goes to up from down and in capturing the cycle goes from up to down/below .

// <==========Event-Bubbling==========>

document.querySelector('div').addEventListener('click', () => {
  console.log('Paragraph');
});

document.querySelector('.one').addEventListener('click', () => {
  console.log('1st Paragraph');
});

// In the result, whenever we will click on "1st paragraph" we'll get "1st-paragraph" in console and then we'll get "paragraph" in console.This process or cycle is called event bubbling in which event-calling cycle goes up .

// <==============Event-Capturing=============>//

document.querySelector('div').addEventListener(
  'click',
  () => {
    console.log('Paragraph');
  },
  true
);

document.querySelector('.one').addEventListener(
  'click',
  () => {
    console.log('1st Paragraph');
  },
  true
);

// By adding the third arguement(true) this process has been changed into capturing cycle.In the result, whenever we will click on "1st paragraph" we'll get "paragraph" in console and then we'll get "1st-paragraph" in console.This process or cycle is called event capturing in which event-calling cycle goes down/below .

// We can stop this kinda propagation by adding "e.stopPropagation()"

document.querySelector('div').addEventListener('click', () => {
  console.log('Paragraph');
});

document.querySelector('.one').addEventListener('click', e => {
  console.log('1st Paragraph');
  e.stopPropagation();
});

// In the above code by adding "e.stopPropagation()" we have stopped the event cycle and it will stop behaving like a bubbling method and in the result  we'll just get  "1st-paragraph" everytime when we click on 1st-paragraph
