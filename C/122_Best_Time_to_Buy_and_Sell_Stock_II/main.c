/* 
sub#2 09:10
Greedy, just buy and sell in continuous day when there is margin.
*/
int maxProfit(int* prices, int pricesSize) {
    if (pricesSize < 2) {
        return 0;
    }
    int profit = 0;
    for (int right = 1; right < pricesSize; right++) {
        int margin = prices[right] - prices [right - 1];
        if (margin > 0) {
            profit += margin;
        }
    }

    return profit;
}