class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);

        ArrayList<List<Integer>> res = new ArrayList();

        for (int firstPtr = 0; firstPtr < nums.length - 2 && nums[firstPtr] <= 0; firstPtr++) {
            if (firstPtr > 0 && nums[firstPtr] == nums[firstPtr - 1]) {
                continue;
            }

            if (nums[firstPtr] > 0) {
                break;
            }

            int leftPtr = firstPtr + 1;
            int rightPtr = nums.length - 1;

            while (leftPtr < rightPtr) {
                final int sum = nums[firstPtr] + nums[leftPtr] + nums[rightPtr];
                if (sum == 0) {
                    ArrayList<Integer> triplet = new ArrayList<Integer>();
                    triplet.add(nums[firstPtr]);
                    triplet.add(nums[leftPtr]);
                    triplet.add(nums[rightPtr]);

                    res.add(triplet);
                }
                if (sum >= 0) {
                    while (leftPtr < rightPtr && nums[rightPtr - 1] == nums[rightPtr]) {
                        rightPtr--;
                    }
                    rightPtr--;
                }
                if (sum <= 0) {
                    while (leftPtr < rightPtr && nums[leftPtr + 1] == nums[leftPtr]) {
                        leftPtr++;
                    }
                    leftPtr++;
                }
            }
        }

        return res;
    }
}