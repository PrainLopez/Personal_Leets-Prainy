/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    if (n == 1) return 1
    if (n == 2) return 2

    let first = 1
    let second = 2
    for (let i = 3; i <= n; i++) {
        const sum = first + second
        first = second
        second = sum
    }

    return second
}