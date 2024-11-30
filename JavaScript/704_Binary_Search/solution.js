/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let leftPtr = 0;
    let rightPtr = nums.length - 1;

    while (leftPtr <= rightPtr) {
        const midPtr = Math.floor(leftPtr / 2 + rightPtr / 2);

        if (nums[midPtr] == target) {
            return midPtr;
        } else if (nums[midPtr] < target) {
            leftPtr = midPtr + 1;
        } else {
            rightPtr = midPtr - 1;
        }
    }

    return -1;
};