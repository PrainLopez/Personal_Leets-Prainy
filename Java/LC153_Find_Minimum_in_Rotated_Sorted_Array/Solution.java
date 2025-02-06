package LC153_Find_Minimum_in_Rotated_Sorted_Array;

class Solution {
    public static int findMin(int[] nums) {
        int left = 0;
        int right = nums.length - 1;
        int res = nums[0];

        while (left <= right) {
            if (nums[left] < nums[right]) {
                res = Math.min(res, nums[left]);
                break;
            }

            int mid = (left + right) / 2;
            res = Math.min(res, nums[mid]);
            if (nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return res;
    }
}