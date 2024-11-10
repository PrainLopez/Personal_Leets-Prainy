class Solution {
    public int maxProfit(int[] prices) {
        if (prices.length < 2) {
            return 0;
        }

        int buyPtr = 0;
        int sellPtr = 1;
        int maxProfit = 0;

        while (sellPtr < prices.length) {
            final int buyPrice = prices[buyPtr];
            final int sellPrice = prices[sellPtr];

            if (buyPrice > sellPrice) {
                buyPtr = sellPtr;
            } else {
                maxProfit = Math.max(sellPrice - buyPrice, maxProfit);
            }
            sellPtr++;
        }

        return maxProfit;
    }
}