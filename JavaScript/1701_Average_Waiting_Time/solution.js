/**
 * @param {number[][]} customers
 * @return {number}
 */
const averageWaitingTime = function (customers) {
    let lastFinish = 0;
    let waitingTime = 0;

    customers.forEach((value) => {
        if (value[0] < lastFinish) {
            waitingTime += lastFinish - value[0] + value[1];
            lastFinish += value[1];
        }
        else {
            waitingTime += value[1];
            lastFinish = value[0] + value[1];
        }
    });

    return waitingTime / customers.length;
};