/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
const maxSatisfied = function (customers, grumpy, minutes) {
    const increments = customers.map(
        (value, index) => (value * grumpy[index])
    );

    let maxIncrement = 0;
    for (let i = 0; i < increments.length - minutes + 1; i++) {
        const incr = increments
            .slice(i, i + minutes)
            .reduce((accumulator, currVal) => (accumulator + currVal), 0);
        maxIncrement = Math.max(incr, maxIncrement);
    }

    return (maxIncrement + customers.reduce((accumulator, currVal, index) => (
        accumulator - increments[index] + currVal
    ), 0));
};
