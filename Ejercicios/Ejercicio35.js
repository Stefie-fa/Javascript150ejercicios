"use strict";

/*
35 Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(sheep) {
    let count = 0;
    for (const element of sheep) {
      if (element === true) {
        count++;
      } else if (element === null || element === undefined) {
        // Ignore null or undefined, continue with the loop
        continue;
      }
    }
    return count;
  }
  
  // call the function
  const sheepArray = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, false, false, true, true];
const result = countSheeps(sheepArray);

//Display the result
console.log(result);  // Output: 17