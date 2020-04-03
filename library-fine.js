/*
https://www.hackerrank.com/challenges/library-fine/problem
*/

// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {
    let fine = 0;
    if (y1 < y2) {
        fine = 0
    } else if (y1 == y2) {
        if (m1 < m2) {
            fine = 0;
        } else if (m1 > m2) {
            fine = 500 * (m1 - m2)
        } else {
            fine = Math.max(15 * (d1 - d2), 0)
        }
    } else {
        fine = 10000;
    }

    return fine;
}

d1 = 2;
m1 = 5;
y1 = 2015;
d2 = 30;
m2 = 5;
y2 = 2015;

console.log(libraryFine(d1, m1, y1, d2, m2, y2));