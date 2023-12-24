"use strict";

/*
1. Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

const date = new Date();

let today = date.getDay();
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
let currentDay = "Today is: " + daysOfWeek[today] + "<br>"; 
let hours = date.getHours(); 
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let time = "Current time is: " + hours + " " + minutes + " " + seconds;

document.write(currentDay);
document.write(time);
