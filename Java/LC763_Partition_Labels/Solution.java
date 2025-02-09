package LC763_Partition_Labels;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

class Solution {
    public List<Integer> partitionLabels(String s) {
        var lastIndex = new HashMap<Character, Integer>();
        for (int i = 0; i < s.length(); i++) {
            lastIndex.put(s.charAt(i), i);
        }

        var output = new ArrayList<Integer>();
        int i = 0;
        while (i < s.length()) {
            final int begin = i;
            int end = lastIndex.get(s.charAt(i));
            while (i < end) {
                i++;
                end = Math.max(end, lastIndex.get(s.charAt(i)));
            }

            output.add(end - begin + 1);
            i = end + 1;
        }

        return output;
    }
}