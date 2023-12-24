"use strict";

/*
23. Given an array/list [] of integers , Find all the LEADERS in the array.
arrayLeaders([1,2,3,4,0]), [4]);

*/

//function to find all the LEADERS in the array
function arrayLeaders(numbers) {
  // Initialize the array to store leaders
  let leaders = [];
  let length = numbers.length;

  // Iterate through the array
  for (let i = 0; i < length; i++) {
    let currentElement = numbers[i];
    let isLeader = true;

    // Check if the current element is greater than the sum of elements to its right
    let sumRightNumbers = 0;
    for (let j = i + 1; j < length; j++) {
      sumRightNumbers += numbers[j];
    }

    if (currentElement <= sumRightNumbers) {
      isLeader = false;
    }

    // If it's the last element and greater than or equal to 0, or a leader, add it to the array
    if ((i === length - 1 && currentElement > 0) || isLeader) {
      leaders.push(currentElement);
    }
  }

  return leaders;
}

  //call the function
  let result = arrayLeaders([1,2,3,4,0]);

  //display 
  document.write(result);