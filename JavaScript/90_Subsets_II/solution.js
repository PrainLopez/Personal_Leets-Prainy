/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
    const result = []
    nums.sort((a, b) => a - b)

    function subsets(subset, num) {
        result.push(subset)
        if (!num.length) {
            return
        }

        const curr = num[0]
        subsets(subset.concat([curr]), num.slice(1))
        subsets(subset.slice(), num.slice(1))
    }
    subsets([], nums)

    const unique = Array.from(
        new Set(result.map((val) => (JSON.stringify(val))))
    ).map((val) => (JSON.parse(val)))
    return unique
}

console.log(subsetsWithDup([1, 2, 2]))
console.log(subsetsWithDup([0]))