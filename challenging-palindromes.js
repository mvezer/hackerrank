/*
https://www.hackerrank.com/challenges/challenging-palindromes/problem
*/

function buildPalindrome(a, b) {
    function reverseArray(arr) {
        return arr.map((item, index, originalArray) => originalArray[originalArray.length - 1 - index]);
    }

    const arr = a.length >= b.length ? a.split('') : b.split('');
    const shortStr = a.length < b.length ? a : b;
    const revArr = reverseArray(shortStr.split(''));

    const longestSequence = {
        arrStart: -1,
        revArrStart: -1,
        length: -1
    };

    let i = 1;
    while (i <= revArr.length) {
        let arrStart = 0;
        while (arrStart < arr.length && arr[arrStart] != revArr[i]) { arrStart++ }
        if (arrStart < arr.length) {

        }
        i++;
    }
    return arr.join('') + ' ' + revArr.join('');
}

console.log(buildPalindrome(
    'jdfh',
    'fds'
));

