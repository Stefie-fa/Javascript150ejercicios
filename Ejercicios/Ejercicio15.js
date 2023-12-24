"use strict";

/*
15. Write a JavaScript program to get the difference between a given number and 13,
if the number is broader than 13 return double the absolute difference.
*/
const thirteen = 13;
function difference(number){
    return number < 13 ? (thirteen - number) : (2 * (number - thirteen));
}

let result = difference(32);
document.write(result + "<br>");

result = difference(11);
document.write(result + "<br>");