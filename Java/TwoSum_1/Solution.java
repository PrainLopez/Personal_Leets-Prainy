import java.util.HashMap;
import java.util.HashSet;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> hashMap = new HashMap<>();

        for(int index = 0; index < nums.length; index ++) {
            int complement =  target - nums[index];

            if(hashMap.containsKey(complement)) {
                int[] result = {index, hashMap.get(complement)};
                return  result;
            }
            hashMap.put(nums[index], index);
        }
        return null;
    }
}
