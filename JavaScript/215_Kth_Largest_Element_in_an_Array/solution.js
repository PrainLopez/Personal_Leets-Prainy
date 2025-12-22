// The random pivot is hard to pass at LeetCode tests, while it's actually fine.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
    function swap(aIndex, bIndex) {
        const temp = nums[aIndex]
        nums[aIndex] = nums[bIndex]
        nums[bIndex] = temp
    }

    function findLargest(start, end) {
        swap(Math.floor((end - start) * Math.random()) + start, end - 1)
        const pivot = nums[end - 1]
        let left = start
        for (let right = left; right < (end - 1); right++) {
            if (nums[right] > pivot) {
                swap(left, right)
                left++
            }
        }
        swap(left, end - 1)
        // console.log(start, end, pivot, nums)

        if (left == k - 1) {
            return nums[left]
        } else if (left > k - 1) {
            return findLargest(start, left)
        } else {
            return findLargest(left + 1, end)
        }
    }

    return findLargest(0, nums.length)
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 6))