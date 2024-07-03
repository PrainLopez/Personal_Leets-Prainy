/**
 * @param {number[]} nums
 * @return {number}
 */
const minDifference = function (nums) {
    if (nums.length <= 4) {
        return 0;
    }
    const diff = nums
        .sort((a, b) => a - b)
        .map((value, index, array) => value - array[index - 1])
        .splice(1);

    let maxDifference = 0;
    const reducerSum = (accumulator, currVal) => accumulator + currVal;
    for (let i = 0; i <= 3; i++) {
        const diffVal = diff.slice(0, i).reduce(reducerSum, 0) + diff.slice(diff.length - 3 + i).reduce(reducerSum, 0);

        if (diffVal > maxDifference) {
            maxDifference = diffVal;
        }
    }

    return nums[nums.length - 1] - nums[0] - maxDifference;
};
