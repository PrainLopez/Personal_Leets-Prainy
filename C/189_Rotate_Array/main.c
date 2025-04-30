/* sub#3 36:48
this is a O(n) of memory solution, O(n) of time complexity
Another solution is O(1) of memory but O(n^2) of time complexity
the other solution is to use a reverse function, reverse the whole array, then reverse two halves
*/
void rotate(int* nums, int numsSize, int k) {
    int k_mod = k % numsSize;
    int* buffer = malloc(k_mod * sizeof(int));

    for (int i = numsSize - k_mod; i < numsSize; i++) {
        buffer[i - (numsSize - k_mod)] = nums[i];
    }

    for (int i = numsSize - 1; i >= 0; i--) {
        if (i < k_mod) {
            nums[i] = buffer[i];
        } else {
            nums[i] = nums[i - k_mod];
        }
    }

    free(buffer); // when?
}