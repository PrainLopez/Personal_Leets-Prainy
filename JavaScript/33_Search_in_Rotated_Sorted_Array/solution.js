/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor(left / 2 + right / 2)

        if (nums[mid] == target) {
            return mid
        }

        if (nums[left] <= nums[mid]) {
            if (target > nums[mid] || target < nums[left]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } else {
            if (target < nums[mid] || target > nums[right]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }

    return -1
}

console.log(search([5, 1, 3], 3))