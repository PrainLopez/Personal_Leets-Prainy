/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minRemoval(nums, k) {
    nums.sort((a, b) => a - b)

    let minPtr = 0
    let maxPtr = 0
    let maxLength = 1

    while (maxPtr < nums.length) {


        if (nums[minPtr] * k < nums[maxPtr]) {
            minPtr++
        } else {
            maxLength = Math.max(maxLength, maxPtr - minPtr + 1)
            maxPtr++
        }
    }

    return nums.length - maxLength
}