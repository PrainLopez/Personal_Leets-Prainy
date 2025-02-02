/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
    let prefixProduct = 1
    let suffixProduct = 1
    const prefixProducts = []
    const suffixProducts = []

    for (const num of nums) {
        prefixProducts.push(prefixProduct)
        prefixProduct *= num
    }
    nums.reverse()
    for (const num of nums) {
        suffixProducts.unshift(suffixProduct)
        suffixProduct *= num
    }

    const output = []
    for (let i = 0; i < nums.length; i++) {
        output.push(suffixProducts[i] * prefixProducts[i])
    }

    return output
}

console.log(productExceptSelf([1, 2, 3, 4]))