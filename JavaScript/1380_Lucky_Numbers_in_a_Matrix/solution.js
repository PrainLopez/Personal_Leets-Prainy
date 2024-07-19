/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = function (matrix) {
    let maxOfRowMin = Number.NEGATIVE_INFINITY;
    for (let row of matrix) {
        let rowMin = Number.POSITIVE_INFINITY;
        for (let num of row) {
            rowMin = Math.min(rowMin, num);
        }
        maxOfRowMin = Math.max(maxOfRowMin, rowMin);
    }

    for (let column = 0; column < matrix[0].length; column++) {
        let columnMax = Number.NEGATIVE_INFINITY
        for (let row of matrix) {
            columnMax = Math.max(columnMax, row[column]);
        }
        if (columnMax == maxOfRowMin) {
            return [columnMax];
        }
    }

    return [];
};