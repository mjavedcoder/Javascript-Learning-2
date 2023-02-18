'use strict';

// <==================Reduce method in Javascript============>//

// The 3rd data transformation method is reduce .datai n reduce method the current array's elements have been boiled(reduced) to a one single value .//

const values = [10, 11, 12];

const reduceMethod = values.reduce(function (acc, value) {
  return acc + value;
}, 0);

console.log(reduceMethod); //output => 33

// The reduce method takes one more parameter which is accumulator . Accumulator is the value returned from the previous iteration and it will be initial value for the first iteration .The initial value which we took here is "0" so 0 is going to be first accumulator then 10 becomes the accumulator (0+10=10) beacuse we know already that accumulator is the value returned from previous iteration . The 3rd accumulator is 21 (10+11),then that 4th accumulator is 33(21+12) .

// SO we get the result of single value(element) which is been boiled to single value by using reduce method .Reduce method cannot be start without the parameter of accumulator as accumulator is the one which specify the initial value in each iteration.In our case the initial value was "0" and if we change into something different value it will change into that initial value .

const numbers = [1, 2, 3];

const reduce1 = values.reduce(function (acc, value) {
  return acc + value;
}, 10);

console.log(reduce1); //output => 43
