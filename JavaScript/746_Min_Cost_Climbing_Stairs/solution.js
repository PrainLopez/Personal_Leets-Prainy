/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
    let minus2 = 0
    let minus1 = 0
    for (let i = 0; i <= cost.length; i++) {
        if (i < 2) continue
        const curr = Math.min(minus2 + cost[i - 2], minus1 + cost[i - 1])
        minus2 = minus1
        minus1 = curr
    }

    return minus1
}