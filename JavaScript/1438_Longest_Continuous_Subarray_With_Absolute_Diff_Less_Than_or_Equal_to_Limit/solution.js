/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = function (nums, limit) {
    const maxDeque = [];
    const minDeque = [];
    let left = 0;
    let maxLength = 0;

    nums.forEach((value, right) => {
        while (maxDeque.length && maxDeque[maxDeque.length - 1] < value) {
            maxDeque.pop();
        }
        maxDeque.push(value);
        while (minDeque.length && minDeque[minDeque.length - 1] > value) {
            minDeque.pop();
        }
        minDeque.push(value);

        while (maxDeque[0] - minDeque[0] > limit) {
            if (maxDeque[0] == nums[left]) {
                maxDeque.shift();
            }
            if (minDeque[0] == nums[left]) {
                minDeque.shift();
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    })

    return maxLength;
};