class Solution {
    public boolean isPalindrome(String s) {
        final char[] arr = s.toLowerCase().toCharArray();

        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            if (!Character.isLetterOrDigit(arr[left])) {
                left++;
                continue;
            } else if (!Character.isLetterOrDigit(arr[right])) {
                right--;
                continue;
            } else if (arr[left] != arr[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}