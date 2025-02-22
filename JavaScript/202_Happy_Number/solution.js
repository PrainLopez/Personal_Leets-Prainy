/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    const visited = new Set();

    while (n != 1) {
        visited.add(n);

        const newN = calc(n);
        if (visited.has(newN)) {
            return false;
        }

        n = newN;
    }

    return true
};

/**
 * @param {number} n 
 * @return {number}
 */
function calc(n) {
    let output = 0;

    while (n > 0) {
        output += (n % 10) * (n % 10);
        n = Math.floor(n / 10);
    }

    return output;
}

console.log(isHappy(19))