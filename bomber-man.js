/*
https://www.hackerrank.com/challenges/bomber-man/problem
*/



function bomberMan(n, grid) {


    if (n < 2) {
        return grid;
    }

    let arr = grid.map(gridItem => gridItem.split(''));

    const r = arr.length;
    const c = arr[0].length;

    if (!(n % 2)) {
        return arr.map(line => line.map('o'));
    }

    if (n % 4 == 1) {
        return arr;
    }




}


