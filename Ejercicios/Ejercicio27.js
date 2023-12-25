"use strict";

/*
27 Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        count++;
    }
    }
    return count;
}

  //call the function
const result = getCount("hello world");

//display result
console.log(result); 