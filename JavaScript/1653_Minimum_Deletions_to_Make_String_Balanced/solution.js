/**
 * @param {string} s
 * @return {number}
 */
function minimumDeletions(s) {
    const del = Array.from({ length: s.length })

    let leftBCount = 0
    for (let i = 0; i < s.length; i++) {
        del[i] = leftBCount
        leftBCount += (s.at(i) === "b") ? 1 : 0
    }
    let rightACount = 0
    for (let i = s.length - 1; i >= 0; i--) {
        del[i] += rightACount
        rightACount += (s.at(i) === "a") ? 1 : 0
    }

    return Math.min(...del)
}