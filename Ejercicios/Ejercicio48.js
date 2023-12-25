"use strict";

/*
48 Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function findAverage(array) {
    let sum = 0;
    let numOfElements = 0;
    if (array.length !== 0) {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            numOfElements++;
        }
        return sum / numOfElements;
    } else {
        return numOfElements;
    }
}