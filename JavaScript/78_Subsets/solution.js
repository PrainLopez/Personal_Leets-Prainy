/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
    if (!nums.length) {
        return [[]]
    }

    const curr = nums.pop()
    const uphalf = subsets(nums)
    const downhalf = uphalf.map((val) => (val.concat([curr])))
    return [...uphalf, ...downhalf]
}

console.log(subsets([1, 2, 3]))