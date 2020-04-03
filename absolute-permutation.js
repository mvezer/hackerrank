/*
https://www.hackerrank.com/challenges/absolute-permutation/problem
*/

function absolutePermutation(n, k) {
    if (k && ((n % k) || (n % 2) || ((n / k) % 2))) {
        return [-1];
    } 

    const result = [];
    let polarity = 1;
    let segmentCounter = 1;
    for (let i = 1; i <= n; i++) {
        if (segmentCounter > k) {
            polarity *= -1;
            segmentCounter = 1;
        }
        segmentCounter++;
        result.push(i + k * polarity);
    }

    return result;
}

/*
const n = 12;
const k = 4;
console.log(absolutePermutation(n, k).join(' '));
*/
const inputArr = [


[98280, 84],
[52136, 931],
[96448, 63072],
[65536, 1024],

[11095, 1585],
[69660, 1620],

[16464, 1176],
[45238, 0],
[91758, 1119],
[9712, 607],
];

let outstr = '';
inputArr.forEach((i) => {
    outstr += `(${i[0]}, ${i[1]}) - ${absolutePermutation(i[0], i[1]).join(' ')} \n`;
});

const fs = require('fs');
fs.writeFileSync('absolute-permutation-output-01.txt', outstr, 'utf-8');

