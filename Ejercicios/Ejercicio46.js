"use strict";

/*
46 Given an array of integers, return a new array with each value doubled.

*/

function maps(x){
    let newX = [];
    for (let i = 0; i < x.length; i++){
      newX[i] = x[i] * 2;
    }
    return newX;
}