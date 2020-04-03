/*
https://www.hackerrank.com/challenges/matrix-rotation-algo/problem
*/

function matrixRotation(matrix, r) {
    const m = matrix.length;
    const n = matrix[0].length;
    const layerCount = Math.floor(Math.min(m, n) / 2);
    const rotatedMatrix = matrix;
    for (let i = 0; i < layerCount; i++) {
        const layerArr = new Array();
        
        for (let j = i; j < n - i; j++) { // top row (letf to right)
            layerArr.push(matrix[i][j]);
        }

        for (let j = i + 1; j < m - i - 1; j++) { // right column (top to bottom)
            layerArr.push(matrix[j][n - i - 1]);
        }

        for (let j = n - i - 1; j >= i; j--) { // bottom row (right to left)
            layerArr.push(matrix[m - i - 1][j]);
        }

        for (let j = m - i - 2; j > i; j--) { // left column (bottom to top)
            layerArr.push(matrix[j][i]);
        }

        const effectiveRotation = r % layerArr.length;
        const rotatedLayer = layerArr
            .slice(effectiveRotation)
            .concat(layerArr.slice(0, effectiveRotation));
        
        let k = 0;
        for (let j = i; j < n - i; j++) { // top row (letf to right)
            rotatedMatrix[i][j] = rotatedLayer[k];
            k++;
        }

        for (let j = i + 1; j < m - i - 1; j++) { // right column (top to bottom)
            rotatedMatrix[j][n - i - 1] = rotatedLayer[k];
            k++;
        }

        for (let j = n - i - 1; j >= i; j--) { // bottom row (right to left)
            rotatedMatrix[m - i - 1][j] = rotatedLayer[k];
            k++;
        }

        for (let j = m - i - 2; j > i; j--) { // left column (bottom to top)
            rotatedMatrix[j][i] = rotatedLayer[k];
            k++;
        }
    }

    rotatedMatrix.forEach(row => console.log(row.join(' ')));
}

const m = [
    [1, 2, 3, 4 ],
    [5, 6, 7, 8 ],
    [9, 10, 11, 12 ],
    [13, 14, 15, 16 ],
];

matrixRotation([[1]], 9);
