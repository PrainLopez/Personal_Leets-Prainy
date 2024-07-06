/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
const passThePillow = function (n, time) {
    const cycle = Math.floor(time / (n - 1));
    const complement = (time % (n - 1));

    switch (cycle % 2) {
        case 0:
            return (1 + complement);
        case 1:
            return (n - complement);
    }
};