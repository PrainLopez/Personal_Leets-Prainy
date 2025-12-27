/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
    const res = []
    function combineMonad(combination, candidates) {
        const sum = combination.reduce((prev, curr) => (prev + curr), 0)
        if (sum > target) { return }
        if (sum == target) {
            res.push(combination)
            return
        }
        const curr = candidates[0]

        for (let i = 0; i < candidates.length; i++) {
            combineMonad(combination.concat([candidates[i]]), candidates.slice(i))
        }
    }
    combineMonad([], candidates, 0)

    return res
}

console.log(combinationSum([2, 3, 6, 7], 7))
console.log(combinationSum([2, 3, 5], 8))