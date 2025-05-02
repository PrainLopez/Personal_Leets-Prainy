/*
sub#3 48:34
Greedy. a flattenned bfs
was balancing edges.
`while (next_reach < numsSize - 1)` could be better,
can be treated as dual pointers.
*/
int jump(int* nums, int numsSize) {
    int reach = 0;
    int step = 0;
    int next_reach = 0;
    for (int i = 0; i < numsSize; i++) {
        if (reach < i) {
            reach = next_reach;
            step++;
        }
        int curr_reach = i + nums[i];
        if (curr_reach > next_reach) {
            next_reach = curr_reach;
        }
    }

    return step;
}