/*
multiple answer
bubbling is costing O(n^2) time, double pointers is more efficient
time-c: O(n)
21:44 AC@submission#2
*/
int removeElement(int* nums, int numsSize, int val) {
    int right = numsSize - 1;
    for (int left = 0; left <= right; left++) {
        while (nums[left] == val && left <= right) { // trickey here, cuz it's easy to write if here, while the other pointer may pointing val too. // edge coverage for 2nd condition.
            nums[left] = nums[right];
            // nums[right] = NULL; // unnecessary, clean memory up though the question doesn't ask. // error: assignment to ‘int’ from ‘void *’ makes integer from pointer without a cast [-Wint-conversion] [solution.c]
            right --;
        }
    }

    return right + 1;
}