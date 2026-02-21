/**
 * @param {string} s
 * @return {number}
 */
function countBinarySubstrings(s) {
    let prevConsecutive = 0
    let currConsecutive = 1
    let subStrings = 0
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] != s[i]) {
            subStrings += Math.min(prevConsecutive, currConsecutive)

            prevConsecutive = currConsecutive
            currConsecutive = 1
        } else {
            currConsecutive++
        }
    }
    subStrings += Math.min(prevConsecutive, currConsecutive)

    return subStrings
}

console.log(countBinarySubstrings("110001111000000"))