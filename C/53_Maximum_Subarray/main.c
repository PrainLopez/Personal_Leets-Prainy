int maxSubArray(int *nums, int numsSize) {
    int maxSum = *nums;
    int currSum = 0;

    for (int i = 0; i < numsSize; i++) {
        if (currSum < 0)
            currSum = 0;
        currSum += nums[i];
        if (currSum > maxSum)
            maxSum = currSum;
    }
    return maxSum;
}