/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
    if (n === 0) return [0]

    const result = []

    let currNum = 0
    for (let batch = 1; batch <= n; batch *= 2) {
        while (currNum < batch * 2) {
            if (currNum < 2) {
                result.push(currNum)
            } else {
                const weight = 1 + result[currNum - batch]
                result.push(weight)
            }

            currNum++
            if (currNum > n) break
        }
    }

    return result
}

console.log(countBits(1))