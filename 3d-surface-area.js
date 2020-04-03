/*
https://www.hackerrank.com/challenges/3d-surface-area/problem
*/

function surfaceArea(A) {
    const h = A.length;
    const w = A[0].length;

    let surface = 0;

    let leftPrev, rightPrev;

    // left & right
    for (let i = 0; i < h; i++) {
        let k = w;
        leftPrev = 0;
        rightPrev = 0;
        for (let j = 0; j < w; j++) {
            k--;
            if (A[i][j] > leftPrev) {
                surface += (A[i][j] - leftPrev);
            }
            leftPrev = A[i][j];

            if (A[i][k] > rightPrev) {
                surface += (A[i][k] - rightPrev);
            }
            rightPrev = A[i][k]
        }
    }

    let upPrev, downPrev;

    // up & down
    for (let j = 0; j < w; j++) {
        let k = h;
        upPrev = 0;
        downPrev = 0;
        for (let i = 0; i < h; i++) {
            k--;
            if (A[i][j] > upPrev) {
                surface += A[i][j] - upPrev;
            }
            upPrev = A[i][j];

            if (A[k][j] > downPrev) {
                surface += A[k][j] - downPrev;
            }
            downPrev = A[k][j];
        }
    }

    // top & bottom
    surface += h*w*2;

    return surface;
}

const A = [
    [1, 3, 4], // 1 + 2 + 1 + 4 = 8
    [2, 2, 3], // 2 + 0 + 1 + 3 = 6
    [1, 2, 4]  // 1 + 1 + 2 + 4 = 8

    // 1 + 1 + 1 + 1 = 4
    // 3 + 2 + 1 = 6
    // 4 + 4 = 8
];

console.log(surfaceArea(A));
