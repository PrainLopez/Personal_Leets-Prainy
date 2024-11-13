class Solution {
    public int characterReplacement(String s, int k) {
        final char[] sArr = s.toCharArray();
        int begin = 0;
        int end = 0;
        HashMap<Character, Integer> hash = new HashMap<Character, Integer>();
        int maxCount = 0;
        int res = 0;

        while (end < sArr.length) {
            final int count = hash.getOrDefault(sArr[end], 0) + 1;
            maxCount = Math.max(maxCount, count);
            hash.put(sArr[end], count);
            end++;
            if (end - begin - maxCount > k) {
                hash.put(sArr[begin], hash.get(sArr[begin]) - 1);
                begin++;
            }
            res = Math.max(res, end - begin);
        }

        return res;
    }
}