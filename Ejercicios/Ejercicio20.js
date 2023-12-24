"use strict";

/*
20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  
*/

const POSITIVE = " is positive ";
const NEGATIVE = " is negative ";

function checkTwoIntegers(num1, num2) {
   return (checkIntegers(num1) + checkIntegers(num2));

}
function checkIntegers(num) {

    return num < 0 ? (num + NEGATIVE) : (num + POSITIVE); 
    
}

let num1 = -5;
let num2 = 5;
let result = checkTwoIntegers(num1, num2);
//Display
document.write(result);
