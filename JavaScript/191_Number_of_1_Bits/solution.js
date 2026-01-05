/**
 * @param {number} n
 * @return {number}
 */
function hammingWeight(n) {
    let weight = 0
    while (n) {
        weight += n & 1
        n >>= 1
    }

    return weight
}

console.log(hammingWeight(5))