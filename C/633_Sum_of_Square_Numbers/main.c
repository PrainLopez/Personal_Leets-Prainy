#include <stdio.h>
#include <math.h>
#include <stdbool.h>

bool judgeSquareSum(int c) {
    int leftNum = 0;
    int rightNum = floor(sqrt((double) c));

    while (leftNum <= rightNum) {
        int diff = c - leftNum * leftNum - rightNum * rightNum;

        if(diff == 0) return true;
        else if(diff < 0) --rightNum;
        else ++leftNum;
    }

    return false;
}
