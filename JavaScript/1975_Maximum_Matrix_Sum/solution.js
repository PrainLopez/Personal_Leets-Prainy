/**
 * @param {number[][]} matrix
 * @return {number}
 */
function maxMatrixSum(matrix) {
    let smallestAbs = Infinity
    let negativeCount = 0
    let result = 0

    for (const line of matrix) {
        for (const num of line) {
            const abs = Math.abs(num)
            result += abs
            smallestAbs = Math.min(smallestAbs, abs)
            if (num <= 0) negativeCount++
        }
    }

    if (negativeCount % 2) {
        result -= 2 * smallestAbs
    }

    return result
}