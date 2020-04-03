/*
https://www.hackerrank.com/challenges/the-grid-search/problem
*/

function gridSearch(G, P) {
    const gridRows = G.length;
    const gridCols = G[0].length;
    const patternRows = P.length;
    const patternCols = P[0].length;

    function gridSearchAt(G, P, r, c) {
        let isMatching = true;
        let i, j;
        i = 0;

        while (i < patternRows && isMatching) {
            j= 0;
            while (j < patternCols && isMatching) {
                isMatching = G[i + r][j + c] == P[i][j];
                j++
            }
            i++;
        }
        return isMatching;
    }
    

    let i = 0;
    let j = 0;
    let found = false;
    while (i < gridRows - patternRows + 1 && !found) {
        j = 0;
        while (j < gridCols - patternCols + 1 && !found) {
            if (G[i][j] == P[0][0]) {
                found = gridSearchAt(G, P, i, j);
            }
            j++;
        }
        i++;
    }

    return found ? 'YES' : 'NO';
}

const testFName = "the-grid-search_test-01.txt";

const fs = require('fs');
const testLines = fs.readFileSync(testFName, "utf-8").split("\n");
let testLineIdx = 0;

function readLine() {
    return testLines[testLineIdx++];
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const RC = readLine().split(' ');

        const R = parseInt(RC[0], 10);

        const C = parseInt(RC[1], 10);

        let G = [];

        for (let i = 0; i < R; i++) {
            const GItem = readLine();
            G.push(GItem);
        }

        const rc = readLine().split(' ');

        const r = parseInt(rc[0], 10);

        const c = parseInt(rc[1], 10);

        let P = [];

        for (let i = 0; i < r; i++) {
            const PItem = readLine();
            P.push(PItem);
        }

        let result = gridSearch(G, P);

        console.log(result);
    }
}

main();

