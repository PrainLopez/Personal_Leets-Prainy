/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function (c) {
    let leftInt = 0;
    let rightInt = Math.floor(Math.sqrt(c));

    while (leftInt <= rightInt) {
        const sum = leftInt * leftInt + rightInt * rightInt;
        if (sum === c) return true;
        else if (sum > c) rightInt--;
        else leftInt++;
    }
    return false;
};