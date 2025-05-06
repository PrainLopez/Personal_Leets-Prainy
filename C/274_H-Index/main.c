// 274. H-Index sub#1 14:40 
int hIndex(int* citations, int citationsSize) {
    int* count = calloc(citationsSize + 1, sizeof(int));
    if (!count) return -1;

    for (int i = 0; i < citationsSize; i++) {
        if (citations[i] >= citationsSize) {
            count[citationsSize]++;
        } else {
            count[citations[i]]++;
        }
    }

    int sum = 0;
    for (int j = citationsSize; j >= 0; j--) {
        sum += count[j];
        if (sum >= j) {
            free(count);
            return j;
        }
    }

    free(count);
    return 0;
}