/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDifference = function (nums) {
    if (nums.length == 1) { return nums[0]; }
    if (nums.length == 2) { return Math.abs(nums[0] - nums[1]); }

    const leftSlice = nums.slice(0, Math.ceil(nums.length / 2));
    // console.log(leftSlice);
    const rightSlice = nums.slice(Math.ceil(nums.length / 2));
    // console.log(rightSlice);

    /**
     * @param {number[]} nums
     * @return {number}
     */
    const sumHelper = function (nums) {
        const res = [];

        for (let i = 2 ** (nums.length); i > 0; i--) {
            let binary = i;
            const factors = [];
            while (binary > 0) {
                const factor = (binary % 2) ? 1 : -1;
                factors.push(factor);
                binary = Math.floor(binary / 2);
            }
            while (factors.length < nums.length) {
                factors.push(-1);
            }
            // console.log(factors)

            let sum = 0;
            for (let j = 0; j < nums.length; j++) {
                sum += nums[j] * factors[j];
            }

            res.push(sum);
        }

        return res;
    }

    const binarySearch = function (range, target) {
        left = 0;
        right = range.length - 1;
        if (target > range[right]) {
            return target - range[right];
        }
        if (target < range[left]) {
            return range[left] - target;
        }

        while (left <= right) {
            mid = Math.floor(left / 2 + right / 2);
            if (range[mid] === target) {
                return 0;
            }
            if (range[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return (Math.min(range[left] - target, target - range[right]));
    }

    const leftSums = sumHelper(leftSlice).sort((a, b) => a - b);
    // console.log(leftSums);
    const rightSums = sumHelper(rightSlice).sort((a, b) => a - b);
    // console.log(rightSums);

    let res = Infinity;
    for (let rightSum of rightSums) {
        const minDiff = binarySearch(leftSums, rightSum);
        res = Math.min(res, minDiff);
        // console.log(`${rightSum} minDiff: ${minDiff}`);
    }

    return res;
};

// console.log(minimumDifference(
//     [2, -1, 0, 4, -2, -9]
// ))

// console.log(minimumDifference(
//     [36, -18]
// ))

// console.log(minimumDifference(
//     [76, 8, 45, 20, 74, 84, 28, 1]
// ))

// console.log(minimumDifference(
//     [13, 40, 61, 94, 35, 55]
// ))