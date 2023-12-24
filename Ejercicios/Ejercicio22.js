"use strict";

/*
22 Given an array/list [] of integers , Find the product of the k maximal numbers.
*/

// function find the k maximal numbers any multiple them
function maxProduct(numbers, size){
    let resultProduct = 1;
    //Order the array in descending order 
    let descendingArray = numbers.sort((a, b) => b - a);

    for (let i =0; i <= size; i++){
        resultProduct *= descendingArray[i];
    }
    return resultProduct;

}

// call the function
let result = maxProduct([4,3,5], 2);

// print result
document.write(result);