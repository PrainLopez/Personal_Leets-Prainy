import java.util.HashSet;

public class Solution {
    public boolean containsDuplicate(int[] nums){
        HashSet<Integer> hashSet = new HashSet<Integer>();
        for(int index = 0; index < nums.length; index++){
            if(!hashSet.add(nums[index]))
                return true;
        }
        return false;
    }

    public static
}
