"use strict";

/*
24. 
Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
*/

// function add numbers that they are string 

function add(a, b) {
    let integerA= parseInt(a, 10);
    let integerB= parseInt(b, 10);
    let sum = integerA +integerB;

    return sum.toString(10);
}

//call the function
let result = add("123", "321");

//Display result
document.write(result);