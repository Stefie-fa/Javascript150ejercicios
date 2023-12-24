"use strict";

/*
18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  
*/

// function for checking if one of two numbers is 50 or they are sum is 50
function checkFor50 (number1, number2){
    const TARGET_NUMBER = 50;
    const meetsRequirements = ((number1 === TARGET_NUMBER)  ||  (number2 === TARGET_NUMBER) || (number1 + number2 === TARGET_NUMBER));
    return  meetsRequirements ? "Se cumple como minimo uno de los requisitos" : "No se cumplen los requisitos";
}

let number1 = 25;
let number2 = 25;
let result = checkFor50(number1, number2);

// Display result
document.write(result);