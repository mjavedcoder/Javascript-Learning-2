// <===============================Optional- chaining======================>//

const details = {
  name: "Thorp-Park",
  location: "London",
  rides: ["Flying-Fish", "Saw", "Stealth", "Tidal-Wave"],
  legalAge: [8, 9, 10, 11],
  openDays: ["Saturday", "Sunday", "Monday", "Tuesday"],
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
};

// Let's say we want to check about the property which doesn't exist

console.log(details.openingHours.mon); //output => undefined
// As the monday does not exist so it will give us "undefined" in the output

console.log(details.openingHours.mon.open); //output => error
// We get an error of the above code coz before the "open" the result is undefined and undefined multiply with something gives us an error .

if (details.openingHours.mon) {
  console.log(details.openingHours.mon.open);
}
// in the above code when the "details.openingHours.mon" exist only when the "open" property will be read otherwise it will not executed ad retuen us an error.
// As the above code give us an error whenever we try to get the result of that property which does not exist so for that "Optional-Chaining" been introduced .

console.log(details.openingHours.mon?.open); //output => undefined

// See, this is difference and benefit of using "Optional-Chaining" because before we were getting an error by using same code without question-mark and now we just getting an "undefined" in result .This actually save us from many errors .

console.log(details.openingHours.Friday?.open); //output => 12
