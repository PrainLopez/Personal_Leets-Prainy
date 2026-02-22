/**
 * @param {number} n
 * @return {number}
 */
function binaryGap(n) {
    let gap = -Infinity
    let maxGap = 0

    while (n > 0) {
        if (n % 2) {
            maxGap = Math.max(gap, maxGap)
            gap = 1
        } else {
            gap++
        }

        n >>= 1
    }

    return maxGap
}

console.log(binaryGap(22))
console.log(binaryGap(8))
console.log(binaryGap(65))