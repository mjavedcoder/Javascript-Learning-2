//<==========================Try catch an error=======================>

// We can use "Try-catch" to catch an error :

try {
  let x = 1;
  const y = 2;
  y = 5;
} catch (error) {
  console.log(error.message); //Assignment to constant variable.
}

// In the above code we have tried to change the "y" variable value but we'll get an error coz this is an illegel as the variable been declared with "const".So we can catch this error by using "Try-catch".
//  The "Try-catch" will be start from keyword "try" and then we'll wrap that code which we want to use to catch an error .After the wrapping by curly-brakets .We'll use keyword "catch".This catch block will have a eccess to whatever the code occurs in that "try" block .
