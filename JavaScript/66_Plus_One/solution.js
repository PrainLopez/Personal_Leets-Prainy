/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    let carry = 1;
    const output = [];

    while (digits.length > 0 || carry > 0) {
        const digit = (digits.pop() ?? 0) + carry;

        carry = Math.floor(digit / 10);
        output.unshift(digit % 10)
    }

    return output;
};

console.log(plusOne([3, 4, 2, 9]))