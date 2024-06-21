int maxSatisfied(int *customers, int customersSize, int *grumpy, int grumpySize, int minutes) {
    int increaments[customersSize];
    int fixedCustomer = 0;
    for (int i = 0; i < customersSize; i++) {
        int temp = customers[i] * grumpy[i];
        if (temp == 0) {
            fixedCustomer += customers[i];
        }
        increaments[i] = temp;
    }

    int maxIncrement = 0;
    for (int i = 0; i < customersSize - minutes + 1; i++) {
        int incr = 0;
        for (int j = i; j < i + minutes; j++) {
            incr += increaments[j];
        }
        maxIncrement = (incr > maxIncrement) ? incr : maxIncrement;
    }

    return (fixedCustomer + maxIncrement);
}