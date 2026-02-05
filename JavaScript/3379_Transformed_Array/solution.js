/**
 * @param {number[]} nums
 * @return {number[]}
 */
function constructTransformedArray(nums) {
    const result = Array.from({ length: nums.length })

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const n = nums.length
        // normalize target index to be within [0, n-1]
        const target = ((i + num) % n + n) % n
        result[i] = nums[target]
    }

    return result
}