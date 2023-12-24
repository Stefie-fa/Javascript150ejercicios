"use strict";

/*
1. Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

const date = new Date();

let today = date.getDay();
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // Wrap day names in quotes
let currentDay = "Today is: " + daysOfWeek[today] + "<br>"; // Add a space after "is" for better formatting
let hours = date.getHours(); // Use getHours instead of getHour
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let time = "Current time is: " + formatTime(hours) + " " + formatTime(minutes) + " " + formatTime(seconds);

document.write(currentDay);
document.write(time);

// Function to format time with AM/PM
function formatTime(value) {
    return value < 10 ? "0" + value : value;
}
