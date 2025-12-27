/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
    const result = []
    candidates.sort((a, b) => (a - b))

    function sum2Monad(combination, candidates, sum) {
        if (sum == target) {
            result.push(combination)
            return
        }

        for (let i = 0; i < candidates.length; i++) {
            if (sum + candidates[i] > target) { break }
            if (i > 0 && candidates[i] - candidates[i - 1] == 0) { continue }
            sum2Monad(combination.concat(candidates[i]), candidates.slice(i + 1), sum + candidates[i])
        }
    }
    sum2Monad([], candidates, 0)

    const unique = Array.from(
        new Set(result.map(item => JSON.stringify(item)))
    ).map(item => JSON.parse(item))
    return unique
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))