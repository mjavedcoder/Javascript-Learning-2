//<=========== Short Circuiting (&& and ||)============>

// <===============|| operator====================>

// As we have discuused about logical operator (&& and ||) and everytime we have discuused them with the boolean values.We can use them in some different ways too .They can resturn any data-type and they do something short-circuiting .

// For example:
//  When,we use logical operators to compare different values

console.log(4 || 'Qas'); //output => 4

// We got 4 in result as (4) is a truthy value although "Qas" is also a truthy value but "4" is the first value which is true so it will become result .

console.log('' || 1); //output => 1
// Because empty string is a falsy value:

console.log(undefined || 'London'); //output =>London
console.log(NaN || 3); //output =>3
console.log(0 || 'Web'); //output => Web
console.log(undefined || NaN || 0 || 'London'); //output => London

// In the result we just got all truty values .It means when any of the value is true it will return the value.So if any of the value is true it will return the true value .

// <===================&& Operator=====================>//

console.log(4 && 'Qas'); //output => Qas

// The result is last value although both the values are true.It is because that the first value is true so it will keep executing and stop at the last true value

console.log(undefined && 'London'); //output => undefined
console.log(NaN && 3); //output =>NAN
console.log(0 && 'Web'); //OUTPUT => 0
console.log(undefined && NaN && 0 && 'London'); //output =>undefined

// The and operand is true when all the values are true and it will be false when any of the value is false and when the first value is false we don't need to see the whole operation as we already got false value So the entire result of and operation will be false .
