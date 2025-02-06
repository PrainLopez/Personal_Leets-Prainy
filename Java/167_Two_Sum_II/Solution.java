class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int leftPtr = 0;
        int rightPtr = numbers.length - 1;
        int[] res = new int[2];

        while (leftPtr < rightPtr) {
            final int sum = numbers[leftPtr] + numbers[rightPtr];
            if (sum == target) {
                res[0] = leftPtr + 1;
                res[1] = rightPtr + 1;
                return res;
            } else if (sum > target) {
                rightPtr--;
            } else {
                leftPtr++;
            }
        }
        return res;
    }
}