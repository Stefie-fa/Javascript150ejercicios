"use strict";

//9. Write a JS program to calculate the days left before Christmas.  

//get current day
let today = new Date ();

//create a date Object for xmas od this year

var xmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() == 11 && today.getDate() > 25) {

    xmas.setFullYear(xmas.getFullYear() + 1);
}

var oneDayms = 1000 * 60 * 60 * 24;

let difference = Math.ceil((xmas.getTime() - today.getTime()) / (oneDayms));

document.write(difference + " days left until christmas");