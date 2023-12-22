"use strict";

/*
6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

*/

let year = 2024;

function isALeapYear(year) {
if (year % 4 == 0){
    if (year % 100 !== 0){
        return true;
    } else if (year % 400 == 0){
        return true;
    }
} else {
    return false;
}
}

if (isALeapYear(year)) {
    document.write(year + " is a leap year");
} else {

    document.write(year + " is not a leap year");

}