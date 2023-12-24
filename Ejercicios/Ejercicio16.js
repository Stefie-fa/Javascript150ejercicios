"use strict";

/*
16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  
*/

function sumTwoNumbers(num1, num2){
    // If the numbers are the same, return triple their sum, otherwise, return their sum
    return num1 === num2 ? (3*(num1 + num2)) : num1 + num2;
}

let number1 = 5, number2 = 5;

// Call the function with the given numbers
let result = sumTwoNumbers(number1, number2);

//Display the result
document.write(result);