int findTheWinner(int n, int k) {
    int index = 0;

    for (int i = 1; i <= n; i++) {
        index = (index + k) % i;
    }

    return index + 1;
}