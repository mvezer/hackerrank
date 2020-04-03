const fs = require('fs');

/*
https://www.hackerrank.com/challenges/queens-attack-2/problem
*/

/*
 1 2 3
  \|/
0 -+- 4
  /|\
 7 6 5

 f3, f7 => 
 r = c + m0
 c = r - m0
 m0 = r_q - c_q

 r = c + (r_q - c_q)
 c = r - (r_q - c_q)


 f1, f5 =>
 r = c + m1
 c = r - m1
 m1 = c_q - r_q

 r = c + (c_q - r_q)
 c = r - (c_q - r_q)


*/
function queensAttack(n, k, r_q, c_q, obstacles) {
    function distance(r_a, c_a, r_b, c_b) {
        return Math.max(Math.max(Math.abs(r_a - r_b) - 1, 0), Math.max(Math.abs(c_a - c_b) - 1, 0));
    }

    const closestObstacles = [
        // 0
        [ r_q, 0 ],

        // 1
        // r = c + (c_q - r_q) where c = 0, n + 1 or greater
        // c = r - (c_q - r_q) where r = n + 1, 0 or greater
        [ Math.min(c_q - r_q, n + 1) , Math.max(n + 1 - (c_q - r_q), 0 ) ],

        // 2
        [ n + 1, c_q ],

        // 3
        // r = c + (r_q - c_q) where c = n + 1, n + 1 or less
        // c = r - (r_q - c_q) where r = n + 1, 0 or greater 
        [ Math.min(n + 1 + (r_q - c_q), n + 1), Math.min(n + 1 - (r_q - c_q), n + 1) ],

        // 4
        [ r_q, n + 1 ],

        // 5
        // r = c + (c_q - r_q) where c = n + 1, 0 or greater
        // c = r - (c_q - r_q) where r = 0, n + 1 or less
        [ Math.min(n + 1 + (c_q - r_q), 0), Math.min(n + 1 - (c_q - r_q), n + 1) ],

        // 6
        [ 0, c_q ],

        // 7
        // r = c + (r_q - c_q) where c = 0, 0 or greater
        // c = r - (r_q - c_q) where r = 0, 0 or greater
        [ Math.max(0, (r_q - c_q)), Math.max(0, 0 - (r_q - c_q)) ],
    ];

    // closestObstacles.forEach(o => console.log(o[0], o[1]));
    
    obstacles.forEach((ob) => {
        const r_o = ob[0];
        const c_o = ob[1];

        let direction = -1;
        if (r_o == r_q) { // case 0 and 4
            direction = (c_o < c_q) ? 0 : 4;
        } else if (c_o == c_q) { // case 2 and 6
            direction = (r_o > r_q) ? 2 : 6;
        } else if ((c_o + (r_q - c_q)) == r_o) { // case 3 and 7 => r = c + (r_q - c_q)
            direction = (c_o > c_q) ? 3 : 7;
        } else if ((c_o + (c_q - r_q)) == r_o) { // case 1 and 5 => r = c + (c_q - r_q)
            direction = (c_o > c_q) ? 5 : 1;
        }

        if (direction != -1 && distance(r_o, c_o, r_q, c_q) < distance(closestObstacles[direction][0],closestObstacles[direction][1]), r_q, c_q) {
            closestObstacles[direction] = [ r_o, c_o ];
        }
    });
    

    //console.log('===');
    //closestObstacles.forEach(o => console.log(o[0], o[1]));

    closestObstacles.forEach(o => console.log(`Obstacle (${o[0]},${o[1]}   distance: ${distance(o[0], o[1], r_q, c_q)})`))

    return closestObstacles.reduce((sum, ob) => sum += distance(ob[0], ob[1], r_q, c_q), 0);
}



const n = 8;
const k = 3;
const r_q = 6;
const c_q = 4;
const obstacles = [
    [ 5,5  ],
    [ 4,2 ],
    [ 2,3 ]
]

console.log(queensAttack(n, k, r_q, c_q, obstacles));


let testData = (fs.readFileSync('queens-attack-2_testcase-6.txt', 'utf8')).split('\n');
let linePtr = 0;

function readLine() {
    return testData[linePtr++];
}

function main() {


    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    function surfaceArea(A) {


    }
    
    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const r_qC_q = readLine().split(' ');

    const r_q = parseInt(r_qC_q[0], 10);

    const c_q = parseInt(r_qC_q[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    console.log(testData[0]);
    console.log(testData[1]);

    let result = queensAttack(n, k, r_q, c_q, obstacles);
    console.log(result);

    //ws.write(result + "\n");

    //ws.end();
}

// main();