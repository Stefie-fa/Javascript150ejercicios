"use strict";

/*
17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
Returns triple the absolute difference if the specified number is greater than 19.  
*/

//function to compute the absolute difference between a specified number and 19

function absoluteDifference(number){
    // initialize constant
    const TARGET_NUMBER  = 19;

    // compute the absolute difference
    let absoluteDiff = Math.abs(TARGET_NUMBER -number);

    //return  triple the absolute difference if the specified number is greater than 19, otherwise return the absolute difference
    return  number > TARGET_NUMBER  ? (3 * absoluteDiff) : absoluteDiff;

}


//call the function 
let specifiedNumber = 30;
let result = absoluteDifference(specifiedNumber);

//print result
document.write(`The result is ${result}<br>`);


