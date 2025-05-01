// sub#1 06:56
bool canJump(int* nums, int numsSize) {
    int reach = 0;
    int i = 0;
    while (i <= reach) {
        int curr_reach = i + nums[i];
        if (curr_reach > reach) {
            reach = curr_reach;
        }

        if (reach >= numsSize - 1) {
            return true;
        }

        i++;
    }

    return false;
}