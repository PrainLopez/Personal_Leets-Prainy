import java.util.*;

public class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> groupedStrs = new HashMap<>();

        for(String word: strs) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            String sortedChars = new String(chars);

            if(!groupedStrs.containsKey(sortedChars)) {
                groupedStrs.put(sortedChars, new ArrayList<>());
            }
            groupedStrs.get(sortedChars).add(word);
        }

        return new ArrayList<>(groupedStrs.values());
    }
}
