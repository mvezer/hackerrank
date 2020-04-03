/*
https://www.hackerrank.com/challenges/non-divisible-subset/problem
*/

function nonDivisibleSubset(k, s) {
    return s
        .reduce((rem, n ) => {
            const r = n % k;
            const i = rem.findIndex(item => item.value == r);
            if (i != -1) {
                rem[i].count += 1;
                return rem;
            } else {
                return rem.concat({
                    value: r,
                    count: 1
                });
            }
        }, [])
        .map(n => { return n.value * 2 == k || n.value == 0 ? { value: n.value, count: 1 } : n })
        .sort((a, b) => b.count - a.count)
        .map((item, i, r) => {
            item.incompatiblePairs = new Array();
            if (i < r.length - 1) {
                item.incompatiblePairs = r.slice(i + 1).reduce((acc, m, j) => {
                    return (item.value + m.value) % k == 0 ? acc.concat(i + 1 + j) : acc
                }, new Array());
            }
             
            return item;
        })
        .filter((item, i, rem) => !rem.find(m => m.incompatiblePairs.includes(i)))
        .reduce((sum, item) => sum += item.count, 0);
}

const k = 4;
const s = [19, 10, 12, 10, 24, 25, 22];

//const k = 3;
//const s = [1,7,2,4];


console.log(nonDivisibleSubset(k, s));