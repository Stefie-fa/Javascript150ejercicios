/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x){
    let array=  x.map(Number);
    const sumNumbers = array.reduce((accu, currValue) => accu + currValue, 0);
    return sumNumbers;
}