//This is module and we'll export the code from this module to the other module of "script.js".This can be done by using the keyword "export" before the code which we want to export .

// There are two types of exports: 1st is "name export" and the 2nd is "default-export".

// <=====Name Export====>

const qas = 'cricket';
const javed = 'chess';

export { qas, javed };

console.log(qas, javed);

// <=======Default export=====>
// In the default export we use the value not the variable name .

const favSports = function (one, two) {
  console.log(`Qasim likes to play ${one} and ${two}`);
};

export default function (one, two) {
  console.log(`Qasim likes to play ${one} and ${two}`);
} //Here we haven't use "favSports" name which is the variable name but instead of that we have used the value to export .
