/**
 * @param {number} n
 * @return {boolean}
 */
function hasAlternatingBits(n) {
    const merge = n ^ (n >> 1)
    const and = merge & (merge + 1)
    return and === 0
}

console.log(hasAlternatingBits(5))
console.log(hasAlternatingBits(1))
