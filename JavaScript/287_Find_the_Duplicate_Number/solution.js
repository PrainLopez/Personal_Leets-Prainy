/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
    let slow = nums[0];
    let fast = nums[0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow == fast) {
            break;
        }
    }

    let p = nums[0];
    while (slow !== p) {
        slow = nums[slow];
        p = nums[p];
    }

    return p;
};