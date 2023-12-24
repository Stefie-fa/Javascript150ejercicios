"use strict";

/*
21. Given an array of integers, find the minimum sum which is obtained from summing each Two integers product .
*/

function minSum(array) {

    // Initialize minSumResult 
    let minSumResult = 0;

    //Sort the array in asc order
    array.sort((a, b) => a - b);

    //Iterate over consecutive pairs of numbers in the array 
    for (let i = 0; i < array.length/2; i++) {
        minSumResult += array[i] * (array[(array.length - 1) - i]);
    }

    return minSumResult;
}

//array
let array = [5, 4, 2, 3];

//call function 
let result = minSum(array);

//Display results
document.write(result);