// All about timing of pointer mutation.
int removeDuplicates(int* nums, int numsSize) {
    if (numsSize < 2) {
        return 1;
    }

    int left = 0;
    for (int right = 1; right < numsSize; right++) { // Timing!
        if (nums[left] != nums[right]) {
            left++; // Timing!
        }
        nums[left] = nums[right];
    }

    return left + 1;
}