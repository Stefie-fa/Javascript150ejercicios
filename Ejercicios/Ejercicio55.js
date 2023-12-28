/*
*/

function countBy(x, n) {
    let z = [];
    if (x > 0 && n > 0) {
        for (let i = 1; i <= n; i++) {
            z.push(x * i);
        }
        return z;
    } else {
        return "Array does not match";
    }
}