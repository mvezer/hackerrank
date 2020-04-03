/*
https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem
*/

function organizingContainers(container) {
    
    const typeCounts = 
        container
            .reduce((acc, row) => row.map((val, idx) => acc[idx] + val),
                (new Array(container.length)).fill(0)
            )
            .sort((a, b) => a - b);
    
    const containerCounts = 
        container
            .map((row, idx) => row.reduce((sum, val) => sum + val), 0)
            .sort((a, b) => a - b);

    return typeCounts.every((a, i) => containerCounts[i] == a) ? 'Possible' : 'Impossible';
}

m1 = [
    [ 0, 2, 1 ],
    [ 1, 1, 1 ],
    [ 2, 0, 0 ]
]

m2 = [
    [ 1, 0, 0 ],
    [ 0, 1, 0 ],
    [ 0, 0, 1 ]
]

m3 = [
    [ 1, 1, 0 ],
    [ 0, 2, 0 ],
    [ 0, 0, 2 ]
]

m4 = [
    [ 0, 0, 0 ],
    [ 0, 1, 0 ],
    [ 0, 0, 1 ]
]
console.log(organizingContainers(m3));
/*console.log(organizingContainers(m2));
console.log(organizingContainers(m3));*/