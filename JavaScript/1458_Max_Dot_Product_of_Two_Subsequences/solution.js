/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function maxDotProduct(nums1, nums2) {
    const m = nums1.length
    const n = nums2.length

    const dpCache = Array.from({ length: m * n })
    function subDp(start1, start2) {
        if (start1 >= m || start2 >= n) return Number.NEGATIVE_INFINITY

        if (dpCache[start1 * n + start2]) return dpCache[start1 * n + start2]

        const result = Math.max(
            nums1[start1] * nums2[start2],
            nums1[start1] * nums2[start2] + subDp(start1 + 1, start2 + 1),
            subDp(start1 + 1, start2),
            subDp(start1, start2 + 1)
        )
        dpCache[start1 * n + start2] = result
        return result
    }
    subDp(0, 0)

    return Math.max(...dpCache)
}

console.log(maxDotProduct([2, 1, -2, 5], [3, 0, -6]))
console.log(maxDotProduct([3, -2], [2, -6, 7]))
console.log(maxDotProduct([-1, -1], [1, 1]))
console.log(maxDotProduct([-1000], [1000]))