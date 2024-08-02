/**
 * @param {number[]} nums
 * @return {number}
 */
const minSwaps = function (nums) {
    const totalOnes = nums.reduce((prev, val) => prev + val, 0);

    let maxOnes = 0;
    let windowOnes = 0;
    let left = 0;
    for (let right = 0; right < totalOnes + nums.length; right++) {
        if (nums[right % nums.length]) {
            windowOnes++;
        }
        if (right - left + 1 > totalOnes) {
            windowOnes -= nums[left];
            left++;
        }
        maxOnes = Math.max(maxOnes, windowOnes);
    }

    return (totalOnes - maxOnes);
};
