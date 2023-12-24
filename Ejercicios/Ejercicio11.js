"use strict";

/*
11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/

// Initialize variables
let temperatureNum = 0;        // Temperature value
let temperatureUnid = "°C";    // Unit of temperature (initially in Celsius)
const temperatureScale = "°F"; // Target temperature scale
let resultConversion = 0;      // Result of the temperature conversion

// Function to convert temperature
function convertTemperature(temperatureNum, temperatureUnid){
    // Check if the unit of temperature is the target scale
    if (temperatureUnid === temperatureScale){
        // Convert Celsius to Fahrenheit
        resultConversion = ((temperatureNum - 32) / 9) * 5;
        temperatureUnid = temperatureScale; // Update unit to Fahrenheit
        console.log(resultConversion + temperaturesUnid); // Display result
    } else {
        // Convert Fahrenheit to Celsius
        resultConversion = (9 * (temperatureNum / 5)) + 32;
        temperaturesUnid  = "°C"; // Update unit to Celsius
        console.log(resultConversion + temperatureScale); // Display result
    }
}

// Call the function with an example
convertTemperature(60, "°C");

