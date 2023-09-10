import java.util.Arrays;

public class Solution {
    public int minimizeMax(int[] nums, int p) {
        //quickSort(nums, p, nums.length - 1);
        Arrays.sort(nums);

        int leftPtr = 0;
        int rigthPtr = nums[nums.length - 1] - nums[0];

        while (leftPtr < rigthPtr) {
            int midPtr = leftPtr + (rigthPtr - leftPtr) / 2;
            int validPairCount = countValidPairs(nums, midPtr);
            if (validPairCount < p) {
                leftPtr = midPtr + 1;
            }
            if (validPairCount >= p) {
                rigthPtr = midPtr;
            }
        }

        return leftPtr;
    }
    /*  This QS is problematic.
    private void quickSort(int[] nums, int lowIndex, int highIndex) {
        if (lowIndex >= highIndex) {
            return;
        }

        int pivot = nums[highIndex];
        int leftPtr = lowIndex;
        int rightPtr = highIndex;

        while (leftPtr < rightPtr) {
            while (leftPtr < rightPtr && nums[leftPtr] <= pivot) {
                leftPtr++;
            }
            while (leftPtr <rightPtr && nums[rightPtr] >= pivot) {
                rightPtr--;
            }
            swap(nums, leftPtr, rightPtr);
        }
        swap(nums, leftPtr, highIndex);

        quickSort(nums, lowIndex, leftPtr - 1);
        quickSort(nums, leftPtr + 1, highIndex);
    }

    private void swap(int[] nums, int index1, int index2) {
        int temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
    }
    */
    private int countValidPairs(int[] nums, int threshold) {
        int count = 0;

        for(int index = 0; index < (nums.length - 1); index++) {
            if ((nums[index + 1] - nums[index]) <= threshold) {
                count++;
                index++;
            }
        }

        return count;
    }
}
