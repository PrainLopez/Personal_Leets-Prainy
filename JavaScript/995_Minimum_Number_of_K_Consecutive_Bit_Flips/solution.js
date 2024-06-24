/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minKBitFlips = function (nums, k) {
    const queue = [];
    let result = 0;

    for (let index = 0; index < nums.length; index++) {
        while (queue.length && index > queue[0] + k - 1) {
            queue.shift();
        }

        if ((nums[index] + queue.length) % 2 == 0) {
            if (index + k > nums.length) {
                return -1;
            }
            queue.push(index);
            result++;
        }
    }

    return result;
};