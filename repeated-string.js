/*
https://www.hackerrank.com/challenges/repeated-string/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
*/

function repeatedString(s, n) {
    const arr = [...s];
    const l = arr.length;
    const aCounts = new Array(l);
    let currentACount = 0;
    arr.forEach((c, i) => {
        if (c == 'a') {
            currentACount++;
        }
        aCounts[i] = currentACount;
    });

    const aSum = aCounts[aCounts.length - 1];

    const toAdd = (!(n % l)) ? 0 : aCounts[n % l - 1]
    return Math.floor(parseInt(n) / l) * aSum + toAdd;
}

const s = 'a';
const n = 1000000000000;

console.log(repeatedString(s,n));