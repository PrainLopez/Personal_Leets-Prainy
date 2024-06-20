import java.util.HashMap;

public class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length())
            return false;

        HashMap<Character, Integer> sHashMap = new HashMap<Character, Integer>();
        HashMap<Character, Integer> tHashMap = new HashMap<Character, Integer>();

        for(int index = 0; index < s.length(); index++) {
            Character key = s.charAt(index);
            if(sHashMap.putIfAbsent(key, 1) != null)
                sHashMap.replace(key, sHashMap.get(key) + 1);
        }
        for(int index = 0; index < t.length(); index++) {
            Character key = t.charAt(index);
            if(tHashMap.putIfAbsent(key, 1) != null)
                tHashMap.replace(key, tHashMap.get(key) + 1);
        }

        return sHashMap.equals(tHashMap);
    }
}
