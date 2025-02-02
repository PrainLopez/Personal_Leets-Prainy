/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
    let prefixProduct = 1
    let suffixProduct = 1
    const output = new Array(nums.length).fill(1)

    for (let i = 0; i < nums.length; i++) {
        output[i] = prefixProduct * output[i]
        prefixProduct *= nums[i]
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] = suffixProduct * output[i]
        suffixProduct *= nums[i]
    }

    return output
}

console.log(productExceptSelf([1, 2, 3, 4]))