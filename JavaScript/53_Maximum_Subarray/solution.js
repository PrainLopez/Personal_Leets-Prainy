/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let maxSum = nums[0];
    let currSum = 0;

    nums.forEach((value) => {
        currSum = Math.max(currSum, 0);
        currSum += value;
        maxSum = Math.max(currSum, maxSum);
    });

    return maxSum;
};