"use strict";

//4. Find the area of a triangle where three sides are 5, 6, 7
let side1 = 5, side2 = 6,  side3 = 7;

const sp = ((side1 + side2 + side3)/2);
let area = Math.sqrt((sp * (sp -side1)*(sp -side2)*(sp -side3)));

document.write("El area es: " + area);

