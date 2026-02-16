/**
 * @param {number} n
 * @return {number}
 */
function reverseBits(n) {
    const rev = (v, len) => {
        if (len === 1)
            return v & 1

        const half = len >> 1
        const mask = (1 << half) - 1

        const lo = v & mask
        const hi = v >>> half

        return (rev(lo, half) << half) | rev(hi, half)
    }

    return rev(n, 32) >>> 0
}