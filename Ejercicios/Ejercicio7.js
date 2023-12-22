"use strict";

/*
7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 
*/

for (let year = 2014; year <=2050; year++) {
    let dia = new Date (year, 0, 1);
    if (dia.getDay() === 0){
        document.write("1st January is being a Sunday  " + year + "<br>");
        //saltar linea 
      
    }

}