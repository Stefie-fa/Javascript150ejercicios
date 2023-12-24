"use strict";

//13. Write a JS exercise to create a variable using a user-defined name. 

// Function to create a variable with a user-defined name
function createVariable (variableName, value){
    const dynamicVariables = {};

    // Assign the value to the dynamically named variable
    dynamicVariables[variableName] = value;

    // Return the dynamically named variable
    return dynamicVariables;
}

//usage
const userDefinedName = "myVariable";
const variableValue = 42;

//call function to create a variable
const result = createVariable(userDefinedName, variableValue);

//print result
document.write(result[userDefinedName]);