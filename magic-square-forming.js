/*

challange url: https://www.hackerrank.com/challenges/magic-square-forming/problem
*/

function getPadValue(d) {
    let padValue = 0;
    let dsqr = d**2;
    while (dsqr > 10) {
        dsqr = dsqr / 10;
        padValue++;
    }

    return padValue;
}

function printMatrix(m) {
    let row;
    const dimension = m.length;
    const padValue = getPadValue(dimension) + 2;
    for (let i = 0; i < dimension; i++) {
        row = m[i];
        rowStr = '';
        for (let j = 0; j < dimension; j++) {
            rowStr = rowStr.concat('|' + String(row[j]).padStart(padValue, ' ') + ' ');
        }
        rowStr = rowStr.concat('|');
        console.log(rowStr);
    }
}

function getMagicConstant(s) {
    const dimension = s.length;
    const d2 = dimension**2;
    const d2h = Math.floor(d2 / 2);
    return ((d2 + 1) * d2h + (d2 % 2) * (d2h + 1)) / dimension;
}

function formingMagicSquare(s) {
    const d = s.length;
    const magicConst = getMagicConstant(s);
    let rowCost = 0;
    for (let i = 0; i < d; i++) {
        rowCost += Math.abs(magicConst  - s[i].reduce((sum, item) => sum + item, 0));
    }

    let colCost = 0;
    let diag = 0;
    let col;
    for (let j = 0; j < d; j++) {
        diag += s[j][j];
        col = 0;
        for (let k = 0; k < d; k++) {
            col += s[j][k];
        }
        colCost += Math.abs(magicConst - col);
    }

    const diagCost = Math.abs(diag - magicConst);

    console.log(`Row cost: ${rowCost}\nColumn cost: ${colCost}\nDiagonal cost: ${diagCost}`);

    return costSum;
}

const inMatrix = [
    [ 4, 5, 8 ],
    [ 2, 4, 1 ],
    [ 1, 9, 7 ]
];

printMatrix(inMatrix);
console.log(formingMagicSquare(inMatrix));