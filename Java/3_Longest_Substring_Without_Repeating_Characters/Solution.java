class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s.length() < 1) {
            return 0;
        }

        HashSet<Character> hashSet = new HashSet<Character>();
        char[] sArr = s.toCharArray();
        int res = 0;

        int begin = 0;
        int end = 0;

        while (end < s.length()) {
            final char ch = sArr[end];
            if (hashSet.contains(ch)) {
                while (sArr[begin] != ch) {
                    hashSet.remove(sArr[begin]);
                    begin++;
                }
                hashSet.remove(sArr[begin]);
                begin++;
            } else {
                hashSet.add(ch);
                end++;
                res = Math.max(res, hashSet.size());
            }
        }

        return res;
    }
}