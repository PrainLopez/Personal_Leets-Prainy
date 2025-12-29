/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    const permutations = []

    function permuteMonad(permutation, nums) {
        if (!nums.length) {
            permutations.push(permutation)
            return
        }

        for (let num of nums) {
            permuteMonad(permutation.concat(num), nums.filter((val) => (val != num)))
        }
    }
    permuteMonad([], nums)

    return permutations
}

console.log(permute([1, 2, 3]))
console.log(permute([1]))
