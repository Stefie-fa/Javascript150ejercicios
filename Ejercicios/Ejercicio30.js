"use strict";

/*
30 We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/

const stringToNumber = function(str){
    // put your code here
    return parseInt (str, 10);
}

// call the function 
const result = stringToNumber("123");
document.write(result); 