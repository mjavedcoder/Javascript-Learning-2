'use strict';

// <======================================Default-Parameters============================>//

// Sometimes it is useful that we default the parameters in this way we don not need to change them manually until we change the default value .

const bookingArr = [];

const bookARide = function (car, passengers, price, destination) {
  const booking = {
    car,
    passengers,
    price,
    destination,
  };
  console.log(booking); //output => {car: 'Honda', passengers: 5, price: undefined, destination: undefined}
  bookingArr.push(booking);
};

bookARide('Honda', 5);

// In the above code i have created an object inside the function and declared some arguements while calling the function and we also took one array "bookingArr" which will be filled when there is a booking .In the out-put we can see that we have two undefined values this is because we have not passed any value in the form of arguements to these parameters .so "price" and "destination" parameters are undefined .We can default these undefined values too if we don't pass them while calling function .

const bookingArr1 = [];

const bookARide1 = function (car, passengers, price, destination) {
  //ES5  Method of default parameters.

  price = price || 200;
  destination = destination || 'Cornwall';

  const booking1 = {
    car,
    passengers,
    price,
    destination,
  };
  console.log(booking1); //output => {car: 'Honda', passengers: 5, price: 200, destination: 'Cornwall'}
  bookingArr1.push(booking1);
};

bookARide1('Honda', 5);

//In the above code we took an old method(ES5) for the values of parameters.If the value will be falsy just like "undefined" in the very first case above, the other value which we have in the or operator will be called and we have values like "200" and "Cornwall"

const bookingArr2 = [];

const bookARide2 = function (
  car,
  passengers,

  //New Es6 method of default parameters.
  price = '£300',
  destination = 'Brighton'
) {
  const booking2 = {
    car,
    passengers,
    price,
    destination,
  };
  console.log(booking2); //output => {car: 'Honda', passengers: 5, price: '£300', destination: 'Brighton'}
  bookingArr2.push(booking2);
};

bookARide2('Honda', 5);

// In the above code we have a new method of default parameters in which we took the default values of price and destination in the function's parameters field.These default parameters values can be override too as we did down below.

bookARide2('Honda', 5, '£1000', 'Southend'); ////output => {car: 'Honda', passengers: 5, price: '£1000',destination:'Southend'}
