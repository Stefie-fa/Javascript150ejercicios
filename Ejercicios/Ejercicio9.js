"use strict";

//9. Write a JS program to calculate the days left before Christmas.  

let currentDate = new Date ();

let currentDay =   currentDate.getDate();
let currentMonth = currentDate.getMonth()+1;
let christmasDay = 25;
let christmasMonth = 12;
let diasFaltantes = 0;
let mesesFaltantes = 0;
console.log(currentDay + " " + currentMonth);


if (christmasMonth == currentMonth) {
            diasFaltantes = christmasDay - currentDay;
            document.write("Faltan " + diasFaltantes + " dias ");

} else if (christmasMonth > currentMonth) {

            if (christmasDay>=currentDay){
                mesesFaltantes = christmasMonth - currentMonth;
                diasFaltantes =christmasDay - currentDay;
            } else {
                diasFaltantes = currentDate - 31;
                mesesFaltantes = 12;
            }
            
            document.write("Faltan " + mesesFaltantes + " mese (s), y " + diasFaltantes + " dia (s) ");

}
