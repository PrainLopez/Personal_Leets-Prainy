public class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length;
        int n = matrix[0].length;

        int leftPtr = 0;
        int rightPtr = m * n - 1;

        while (leftPtr <= rightPtr) {
            int midPtr = (leftPtr + rightPtr) / 2;
            int midVal = matrix[midPtr / n][midPtr % n];

            if (midVal == target) {
                return true;
            }
            if (midVal < target) {
                leftPtr = midPtr + 1;
            }
            if (midVal > target) {
                rightPtr = midPtr - 1;
            }
        }
        return false;
    }
}
