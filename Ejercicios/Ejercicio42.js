"use strict";

/*
42 Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

*/

function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secondsExtra = seconds % 60;
  
    // Formatear los valores para asegurar que tengan dos dígitos
    let formattedHours = hours < 10 ? '0' + hours : hours.toString();
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
    let formattedSeconds = secondsExtra < 10 ? '0' + secondsExtra : secondsExtra.toString();
  
    // Devolver la cadena formateada
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  
  console.log(humanReadable(59)); 
  