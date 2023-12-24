"use strict";

/*
19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 
*/

//function check integers within 20 of 100 or 400
function isNumberIsOnArray(number){
    
    // create an array
    const TARGET_NUMBERS = [20, 100, 400];
    //to find number in the array
    let findNumber = TARGET_NUMBERS.lastIndexOf(number);
    let exist = "The number is one of the target numbers ";
    let noExist = "The number is not one of the target numbers ";
    return  findNumber >= 0 ? exist : noExist;

}

//call the function
let number = 10;
let result = isNumberIsOnArray(number);

//Display result
document.write(result);