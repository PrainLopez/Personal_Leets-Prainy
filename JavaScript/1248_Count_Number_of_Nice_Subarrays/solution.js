/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays = function (nums, k) {
    const odd = nums.map((value) => (
        value % 2
    ));

    const prefixSum = new Map();
    prefixSum.set(0, 1);

    let counter = 0;
    let currSum = 0;
    odd.forEach((value) => {
        currSum += value;
        const diff = currSum - k;

        if (prefixSum.has(diff)) {
            counter += prefixSum.get(diff);
        }
        prefixSum.set(currSum, 1 + (prefixSum.get(currSum) || 0));

    });

    return counter;
};
