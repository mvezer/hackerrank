/*
https://www.hackerrank.com/challenges/the-time-in-words/problem
*/

function timeInWords(h, m) {
    const hours = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    const minutes = [
        "o\' clock",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "quarter",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine",
        "half"
    ];

    const reveresedWordOrder = m ==15 || m >= 30;
    const isPast = m <= 30;
    const hourWord = isPast ? hours[h] : hours[(h + 1) % 12];
    const minuteIndex = isPast ? m : 60 - m;
    
    let minutePostfix;
    if (minuteIndex % 15 == 0) {
        minutePostfix = "";
    } else if (minuteIndex == 1) {
        minutePostfix = " minute";
    } else {
        minutePostfix = " minutes";
    }

    const minuteWord = minutes[minuteIndex] + minutePostfix;

    let timeStr;
    if (m == 0) {
        timeStr = `${hourWord} ${minuteWord}`;
    } else if (isPast) {
        timeStr = `${minuteWord} past ${hourWord}`;
    } else {
        timeStr = `${minuteWord} to ${hourWord}`;
    }

    return timeStr;
}

const h = 5;
const m = 15;

console.log(timeInWords(5, 15));
console.log(timeInWords(6, 47));
console.log(timeInWords(12, 45));
console.log(timeInWords(1, 30));
console.log(timeInWords(5, 12));
console.log(timeInWords(4, 0));
console.log(timeInWords(9, 23));
console.log(timeInWords(11, 1));
