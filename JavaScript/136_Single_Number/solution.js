/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    return nums.reduce((prev, curr) => (prev ^ curr), 0)
}

console.log(singleNumber([1, 2, 3, 4, 5, 5, 2, 1, 4]))