// sub#1 6:22
int removeDuplicates(int* nums, int numsSize) {
    if (numsSize < 3) {
        return numsSize;
    }

    int left = 1; // left is the end of actual array
    for (int right = 2; right < numsSize; right++) {
        if (nums[left] < nums[right] || nums[left] > nums[left - 1]) {
            left++;
        }
        nums[left] = nums[right];
    }

    return left + 1;
}