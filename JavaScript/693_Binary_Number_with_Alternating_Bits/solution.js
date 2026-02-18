/**
 * @param {number} n
 * @return {boolean}
 */
function hasAlternatingBits(n) {
    let lastBit = -1
    while (n > 0) {
        const currBit = n % 2
        if (currBit === lastBit)
            return false

        lastBit = currBit
        n >>= 1
    }

    return true
}

console.log(hasAlternatingBits(5))