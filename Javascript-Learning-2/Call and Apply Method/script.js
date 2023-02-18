'use strict';

//<==================================Call and Apply Methods==============================>//

const games = {
  firstGame: 'Cricket',
  secondGame: 'Fotball',
  //you can write function in object like this too, favouriteGame(){}
  favouriteGame: function () {
    console.log(`Qas loves to play ${this.firstGame}`);
  },
};

games.favouriteGame(); //output => Qas loves to play Cricket

// In the above code we took an object of "games" and in that we have function of favouriteGame which we want to console our favouriteGame, Every function in javascript has an access to "this" keyword and we have used "this" keyword in our function too.This keyword in an object gives us the value of object which is calling to it so this become "games" in our case .

// <==============================1st-Case =======================================>//

// Now what if we have an other object then how would we find out the favourite games of that object ?one method can be that we copy the above code of "favouriteGame" function and paste that in other(2nd) game object but that is not recommended and that is against the rule of "DRY" DON'T REPEAT URSELF IN CODING TOO .So this problem has been solved by using call and apply method.

//Call-Method:

const games2 = {
  firstGame: 'hockey',
  secondGame: 'chess',
  //The down below code is not recommended to use:
  // favouriteGame: function () {
  //   console.log(`Qas loves to play ${this.firstGame}`);
  // }
};

games.favouriteGame.call(games2); //output => Qas loves to play hockey

// Here we have used "Call-Method".By using call method we can borrow the function from other object and can use that function in our desireable object.So we borrowed the "favouriteGame" function and used that in our "games2" object.In the call method the first arguement is the reference to the object where we wants to borrow the function of other object .
// In this case we have discussed what if we want to use the function of other object in the other object by using call method .

// <==============================2nd-Case =======================================>//
// In this case we will discussed that how can we use call method if we have parameters in the function of first object .

const games3 = {
  firstGame: 'Cricket',
  secondGame: 'Fotball',
  //you can write function in object like this too, favouriteGame(){}
  favouriteGame: function (friend) {
    console.log(`Qas loves to play ${this.firstGame} with ${friend}`);
  },
};

games3.favouriteGame('Sam'); //output => Qas loves to play Cricket with Sam

// We can stored this code of "favouriteGames" in one of the varibale so that it maekes easy for us to use .

const activity = games3.favouriteGame;

const games4 = {
  firstGame: 'hockey',
  secondGame: 'chess',
};

activity.call(games4, 'Jonny'); //output => Qas loves to play hockey with Jonny

// In the second case we have seen that we can stored the function of object to the one single varibale too,in this way it makes easy for us to use that in other objects ,and the other thing we have seen that how can we pass the arguement to the function by using call method .we can use as many parameters as we want but make sure to separate them with separate comma ","

// <===========================Apply Method ============================>

// In apply method the main difference is that after the first arguement "reference" value the second arguement has been passed in the form of array [].

const games5 = {
  firstGame: 'Cricket',
  secondGame: 'Fotball',
  //you can write function in object like this too, favouriteGame(){}
  favouriteGame: function (friend, secondfriend) {
    console.log(
      `Qas loves to play ${this.firstGame} with ${friend} and ${secondfriend}`
    );
  },
};

const activity1 = games5.favouriteGame;

const games6 = {
  firstGame: 'hockey',
  secondGame: 'chess',
};

activity1.apply(games6, ['jadu', 'jof']); //output => Qas loves to play hockey with jadu and jof
