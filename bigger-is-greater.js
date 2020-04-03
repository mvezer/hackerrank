function biggerIsGreater(w) {
    const arr = [...w];
    let response = "no answer";
    let i = arr.length - 2;
    while (i >= 0 && response == "no answer") {
        let swapIdx = -1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j] && (swapIdx === -1 || arr[j] < arr[swapIdx])) {
                swapIdx = j;
            }
        }

        if (swapIdx != -1) {
            const buf = arr[i];
            arr[i] = arr[swapIdx];
            arr[swapIdx] = buf;
            const firstPart = arr.slice(0, i + 1);
            const lastPart = arr.slice(i + 1);
            response = firstPart
                .concat(
                    lastPart
                        .sort((a, b) => {
                            if (a > b) {
                                return 1;
                            }
                            if (b > a) {
                                return -1;
                            }
                            return 0;
                        }))
                .join("");
        }

        i--;
    }
    return response;
}

const wArr = [
    "dkhc",
    "lmno",
    "dcba",
    "dcbb",
    "abdc",
    "abcd",
    "fedcbabcd"
];

wArr.forEach(w => {
    console.log(biggerIsGreater(w));    
});

