/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    nums.sort((a, b) => (a - b));
    const triplets = [];

    nums.forEach((value, index) => {
        if (value === nums[index - 1]) return;

        let left = index + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = value + nums[left] + nums[right];
            if (sum === 0) {
                triplets.push([value, nums[left], nums[right]]);
            }

            if (sum < 0) {
                left++;
                while (nums[left] == nums[left - 1]) {
                    left++;
                }
            }
            else {
                right--;
                while (nums[right] == nums[right + 1]) {
                    right--;
                }
            }
        }
    });

    return triplets;
};

console.log(threeSum(
    [-1, 0, 1, 2, -1, -4]
));