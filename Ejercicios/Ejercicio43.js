"use strict";

/*
43 Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
    // Create an empty array named zeros to store all the zeros found in the original array
    let zeros = [];
    
    //filter out zeros and push the to zero array
    arr = arr.filter(item => (item !== 0 ? true : zeros.push(item)&& false));
    
    // Concatenate the zeros array at the end of arr
    return arr.concat(zeros);
}

// call the function
let myArray = [1, 2, 0, 3, 0, 4, 5, 0, 6];
let resultArray = moveZeros(myArray);

// Display results
console.log(resultArray);
