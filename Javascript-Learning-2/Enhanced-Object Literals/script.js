// Enhanced Object Literals:

// <===================================1st Enhancement in object literals===============>//

// const details = {
//   name: 'Thorp-Park',
//   location: 'London',
//   rides: ['Flying-Fish', 'Saw', 'Stealth', 'Tidal-Wave'],
//   legalAge: [8, 9, 10, 11],
//   openDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
//   openingHours: {
//     Friday: {
//       open: 12,
//       close: 20,
//     },
//     Sat: {
//       open: 12,
//       close: 20,
//     },
//     Sun: {
//       open: 12,
//       close: 20,
//     },
//   },
// };

// In the above code we have an object of "OpeningHours" in the object "details".If we take out this object and make it a separate object then how would we call it again inside of the old object name "details".We used to call with the given below method that we make a point towards that object name which we did down below :

const openingHours = {
  Friday: {
    open: 12,
    close: 20,
  },
  Sat: {
    open: 12,
    close: 20,
  },
  Sun: {
    open: 12,
    close: 20,
  },
};

const details = {
  name: 'Thorp-Park',
  location: 'London',
  rides: ['Flying-Fish', 'Saw', 'Stealth', 'Tidal-Wave'],
  legalAge: [8, 9, 10, 11],
  openDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
  openingHours: openingHours,
};

console.log(details);

// The other method which has been introduced in ES6 IS Enhanced object literal in which we just mentioned the name of the object which we are willing to call .This is the 1st enhancement in the object literal.

const details1 = {
  name: 'Thorp-Park',
  location: 'London',
  rides: ['Flying-Fish', 'Saw', 'Stealth', 'Tidal-Wave'],
  legalAge: [8, 9, 10, 11],
  openDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
  openingHours,
};

console.log(details1);

// <===================================2nd Enhancement in object literals===============>//

// The 2nd enhancement in object literals is very handy which talks about the objects in which we do not need to write the "function" keyword while declaring it inside of the object .

// const details2 = {
//   name: 'Thorp-Park',
//   location: 'London',
//   rides: ['Flying-Fish', 'Saw', 'Stealth', 'Tidal-Wave'],
//   legalAge: [8, 9, 10, 11],
//   openDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
//   openingHours: {
//     Friday: {
//       open: 12,
//       close: 20,
//     },
//     Sat: {
//       open: 12,
//       close: 20,
//     },
//     Sun: {
//       open: 12,
//       close: 20,
//     },
//   },
//   fundDay: function () {},
// };

// In the above we have a function with the property name of "fundDay" so with the new enhancement in object literals we can write this method like:So in the down below code you can see we have removed the function keyword and colon too .

const details2 = {
  name: 'Thorp-Park',
  location: 'London',
  rides: ['Flying-Fish', 'Saw', 'Stealth', 'Tidal-Wave'],
  legalAge: [8, 9, 10, 11],
  openDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
  openingHours: {
    Friday: {
      open: 12,
      close: 20,
    },
    Sat: {
      open: 12,
      close: 20,
    },
    Sun: {
      open: 12,
      close: 20,
    },
  },
  fundDay() {},
};

// <===================================3rd Enhancement in object literals===============>//
// The 3rd enhancement in which we can compute(calculate) the property name instead of writing them down manually .

const days = ['Friday', 'Saturday', 'Sunday'];

const openingDays = {
  [days[0]]: {
    open: 12,
    close: 20,
  },
  [days[1]]: {
    open: 12,
    close: 20,
  },
  [days[2]]: {
    open: 12,
    close: 20,
  },
};

console.log(openingDays);
//output => Friday
// :
// {open: 12, close: 20}
// Saturday
// :
// {open: 12, close: 20}
// Sunday
// :
// {open: 12, close: 20}

// These all are some of the enhancement which happend in ES6 JAVASCRIPT:
