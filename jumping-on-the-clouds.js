/*
https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
*/

function jumpingOnClouds(c) {
    let i = 0;
    let jumpsCount = 0;
    while (i < c.length - 1) {
        if (i < c.length - 2 && c[i + 2] != 1) { // long jump possible
            // console.log(`LONG jump (${i} => ${i + 2})`);
            i += 2;
        } else if (i < c.length - 1) { // short jump possible
            // console.log(`SHORT jump (${i} => ${i + 1})`);
            i += 1;
        }

        jumpsCount++;
    }

    return jumpsCount;
}

c = [0,0,0,1,0,0];
console.log(c);
console.log(jumpingOnClouds(c));