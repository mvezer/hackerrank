/*
challenge url: https://www.hackerrank.com/challenges/picking-numbers/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
*/

function pickingNumbers(a) {
    const counts = new Array(100);
    counts.fill(0);

    for (let i = 0; i < a.length; i++) {
        counts[a[i]] += 1;
    }
    
    let bestLength = 2;
    let currentLength;
    for (let i = 0; i < 99; i++) {
        currentLength = counts[i] + counts[i + 1];
        if ( currentLength> bestLength) {
            bestLength = currentLength;
        }
    }
    
    return bestLength;
}

const test1 = [ 4, 6, 5, 3, 3, 1 ]

console.log(pickingNumbers(test1));