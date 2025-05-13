/*
Arithmetic problem, cost[i] = gas[i] - cost[i]
Solution exists when Sum(cost) >= 0
Start at Sum(cost[i]) at its lowest
*/
int canCompleteCircuit(int* gas, int gasSize, int* cost, int costSize) {
    int sum = 0;
    int min = 0; // start at the min of sum variation.
    int start = 0; // this is station serial

    for (int i = 0; i < gasSize; i++) {
        sum += gas[i] - cost[i];
        if (sum < min) {
            min = sum;
            start = (i + 1) % gasSize;
        }
    }

    if (sum >= 0) {
        return start;
    } else {
        return -1;
    }
}