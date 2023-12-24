"use strict";

/*
10.The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

1 = anane
2 = adak
3 = adak anane
4 = adak adak
5 = adak adak anane
6 = adak adak adak
7 = adak adak adak anane
8 = adak adak adak adak

Take a given number and return the Arara's equivalent.

e.g.

countArara(3) 'adak anane'

countArara(8) 'adak adak adak adak'

*/

function countArara(n) {
    // Check if n is even
    if (n % 2 === 0) {
        // If even, generate 'adak' repeated n/2 times
        return 'adak '.repeat(n / 2).trim();
    } else if ((n !== 1) && (n % 2 !== 0)){
        // If odd, generate 'adak' repeated (n-1)/2 times and append 'anane'
        return 'adak '.repeat((n - 1) / 2).trim() + " anane";
    } else if (n === 1){
       return "anane";
    }
}

let result = countArara(1);
document.write(result + "<br>");
result = countArara(3);
document.write(result + "<br>");
result = countArara(8);
document.write(result + "<br>");
