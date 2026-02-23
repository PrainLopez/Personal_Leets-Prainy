/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
function hasAllCodes(s, k) {
    const seen = new Set()

    for (let i = 0; i <= s.length - k; i++) {
        const sub = s.slice(i, i + k)

        seen.add(sub)
    }

    return (seen.size == 2 ** k)
}

console.log(hasAllCodes("00110", 2)) // true
