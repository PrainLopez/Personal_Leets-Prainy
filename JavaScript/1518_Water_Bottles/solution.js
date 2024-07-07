/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = function (numBottles, numExchange) {
    let drink = numBottles;
    while (numBottles >= numExchange) {
        const exchange = Math.floor(numBottles / numExchange);
        drink += exchange;

        numBottles = numBottles % numExchange + exchange;
    }

    return drink;
};
