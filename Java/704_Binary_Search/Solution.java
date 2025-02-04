class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            final int mid = (left + right) / 2;
            final int midNum = nums[mid];

            if (midNum == target) {
                return mid;
            } else if (midNum < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}