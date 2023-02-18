// <======================Async/Await in Javascript=====================>//

// There is special syntex to work with promises in javascript.

// async function Qas() {
//   return 5;
// }

// Qas().then(x => {
//   alert(5);
// });

// Whenever "async" comes before the function it means that it will definitely going to return a promise.This is why we have used "then" while calling this function.

// Let assume we have two promises:

async function FunGames() {
  let qasGame = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Cricket is favourite Game');
    }, 2000);
  });

  let javedGame = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Chess is his favourite Game');
    }, 6000);
  });

  //   qasGame.then(alert); //Whatever the return is, i can store that in the varibale
  //   javedGame.then(alert);

  let Game1 = await qasGame; //let value = await promise,first "qasGame" will run and "Game1" gets the value of that then the pther "javedGame" will be execute .
  console.log('Fetching Qas Game:' + Game1);

  let Game2 = await javedGame; //let value = await promise
  console.log('Fetching Javed Game:' + Game2);
  return [Game1, Game2];
}

FunGames();

// By putting the "await" we can stop the regular execution of javascript(asynchronus).The 2nd function "Game2" will not be execute until the first function "Game1" executed completely .In the first 2 seconds the result will be "Fetching Qas Game:Cricket is favourite Game" then after 6 seconds the result will be "Fetching Javed Game:Chess is his favourite Game" .So whenever we want to stop the execution we can use "await" .
