/*
https://www.hackerrank.com/challenges/equality-in-a-array/problem
*/

function equalizeArray(arr) {
    const counts = {};
    let maxCount = 1;
    arr.forEach(item => {
        if (counts.hasOwnProperty(item)) {
            counts[item] += 1;
            if (counts[item] > maxCount) {
                maxCount = counts[item];
            }
        } else {
            counts[item] = 1;
        }
    });

    return arr.length - maxCount;
}

arr = String("37 32 97 35 76 62").split(" ");

console.log(equalizeArray(arr));