//<===========The For-OF Loop============>

// We used to looping the arrays by using "for-loop" in which we need to put some efforts of initilization, condition and increesment or counter .So The For-OF Loop makes easy for us .

const details = {
  name: 'Thorp-Park',
  location: 'London',
  rides: ['Flying-Fish', 'Saw', 'Stealth', 'Tidal-Wave'],
  legalAge: [8, 9, 10, 11],
  openDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
};

const loopArr = [...details.rides];
console.log(loopArr);

for (const items of loopArr) console.log(items); //This code is in for-of Loop.

// //output of above code :
// Flying-Fish
// Saw
// Stealth
// Tidal-Wave

// In the above code of for-of loop we first need to take variable which we take by the name of "items" then the name of array which is in our case is "loopArr"

for (const items of loopArr.entries()) console.log(items);
// //output of above code :
//  [0, 'Flying-Fish']
//  [1, 'Saw']
//  [2, 'Stealth']
//  [3, 'Tidal-Wave']
// The above code use to get the index of elements in arrays .
