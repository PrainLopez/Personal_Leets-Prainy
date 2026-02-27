/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function minOperations(s, k) {
    let zeroCount = 0
    for (const bit of s) {
        if (bit === "0") {
            zeroCount++
        }
    }
    const oneCount = s.length - zeroCount

    if (zeroCount == 0) {
        return 0
    }

    for (let ops = Math.ceil(zeroCount / k); ops <= s.length; ops++) {
        const total = ops * k
        if ((total - zeroCount) % 2) continue

        if (ops % 2) {
            if (total <= zeroCount * ops + oneCount * (ops - 1)) {
                return ops
            }
        } else {
            if (total <= zeroCount * (ops - 1) + oneCount * ops) {
                return ops
            }
        }
    }

    return -1
}

console.log(minOperations("110", 1))
console.log(minOperations("0101", 3))
console.log(minOperations("101", 3))
console.log(minOperations("11001110", 5))
console.log(minOperations("1100000", 6))