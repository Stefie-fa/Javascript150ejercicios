"use strict";

/*
Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 
*/

let guessNumber = Math.floor(Math.random()*11);
let promptedNumber = prompt("Guess the number between 1 and 10 inclusive");

guessNumber == promptedNumber ? document.write("Good Work") : document.write("Not matched");