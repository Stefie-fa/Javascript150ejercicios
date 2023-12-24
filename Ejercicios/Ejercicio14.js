"use strict";

//14. Write a JavaScript exercise to get the filename extension.  

//Function to get the filename extension
function getFilenameExtension(filename){

    //To find the last dot to get the extension
    var lastDotIndex = filename.lastIndexOf(".");

    // Check if a dot is found
    if (lastDotIndex !== -1){

        // Extract the extension from the last dot position
        var extension = filename.slice(lastDotIndex + 1);
        return extension.toLowerCase();

    } else {
        return "There is not a filename extension";
    }
}

var exampleFilename = "example_document.pdf";
var fileExtension = getFilenameExtension(exampleFilename);

//Display the result
document.write("File extension:" + fileExtension);