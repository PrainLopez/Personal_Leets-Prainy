class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int left = 1;
        int right = Arrays.stream(piles).max().getAsInt();
        int output = Integer.MAX_VALUE;

        while (left <= right) {
            int mid = (left + right) / 2;
            int time = 0;
            for (int pile : piles) {
                time += Math.ceil((double) pile / mid);
            }
            if (time <= h) {
                output = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return output;
    }
}