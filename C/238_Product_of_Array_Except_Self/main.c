// 238. Product of Array Except Self 18:07
int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* result = malloc(numsSize * sizeof(int));
    if (!result) return result;
    for (int i = 0; i < numsSize; i++) {
        result[i] = 1;
    }

    int prefixProd = 1;
    for (int i = 0; i < numsSize; i++) {
        result[i] *= prefixProd;
        prefixProd *= nums[i];
    }

    int suffixProd = 1;
    for (int i = numsSize - 1; i >= 0; i--) {
        result[i] *= suffixProd;
        suffixProd *= nums[i];
    }

    return result;
}