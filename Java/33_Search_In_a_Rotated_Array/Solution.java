public class Solution {
    public int search(int[] nums, int target) {
        int pivotPtr = binarySearchPivot(nums);
        int leftSearch = binarySearch(nums, 0, (pivotPtr - 1), target);
        int rightSearch = binarySearch(nums, pivotPtr, (nums.length - 1), target);

        if (leftSearch >= 0) {
            return leftSearch;
        }
        if (rightSearch >= 0) {
            return rightSearch;
        }
        return -1;
    }

    private int binarySearchPivot(int[] nums) {
        int last = nums[nums.length - 1];
        int leftPtr = 0;
        int rightPtr = nums.length - 1;

        while (leftPtr <= rightPtr) {
            int midPtr = leftPtr + (rightPtr - leftPtr) / 2;
            int midValue = nums[midPtr];
            if (midValue > last) {
                leftPtr = midPtr + 1;
            }
            if (midValue <= last) {
                rightPtr = midPtr -1;
            }
        }
        return leftPtr;
    }

    private int binarySearch(int[] nums, int leftPtr, int rightPtr, int target) {
        while (leftPtr <= rightPtr) {
            int midPtr = leftPtr + (rightPtr - leftPtr) / 2;
            int midValue = nums[midPtr];
            if (midValue == target) {
                return midPtr;
            }
            if (midValue < target) {
                leftPtr = midPtr + 1;
            }
            if (midValue > target) {
                rightPtr = midPtr -1;
            }
        }
        return -1;
    }
}
