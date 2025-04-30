// sub#3 20:30
int maxProfit(int* prices, int pricesSize) {
    int max_margin = 0;
    int left = 0; // left: buying day right: selling day
    for (int right = 0; right < pricesSize; right++) {
        int margin = prices[right] - prices[left];
        if (margin > max_margin) {
            max_margin = margin;
        }
        if (margin < 0) {
            left = right;
        }
    }

    return max_margin;
}