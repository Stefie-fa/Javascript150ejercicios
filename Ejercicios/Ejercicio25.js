"use strict";

/*
25 Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

//Create the function
function evenOrOdd(number) {
    return number % 2 == 0 ? "Even" : "Odd";
  }

//Call the function
let number = 6;
let result = evenOrOdd(number);

//Display the result
document.write("The number " + number +  " is " + result);