/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
const restoreMatrix = function (rowSum, colSum) {
    const res = rowSum.map(() => colSum.map(() => 0));

    colSum.forEach((val, index) => {
        res[0][index] = val;
    });

    for (let i = 0; i < res.length - 1; i++) {
        let diff = res[i].reduce((prev, curr) => prev + curr, 0) - rowSum[i];
        let j = 0;
        while (diff != 0) {
            const temp = res[i][j];
            if (temp <= diff) {
                res[i + 1][j] = temp;
                res[i][j] = 0;
                diff -= temp;
            } else {
                res[i + 1][j] = diff;
                res[i][j] = temp - diff;
                diff = 0;
            }
            j++;
        }
    }

    return res;
};
