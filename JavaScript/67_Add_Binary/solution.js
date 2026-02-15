/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    if (a.length > b.length) {
        b = b.padStart(a.length, "0")
    } else {
        a = a.padStart(b.length, "0")
    }

    let carry = 0
    let result = ""
    for (let i = a.length - 1; i >= 0; i--) {
        const aDigit = parseInt(a[i])
        const bDigit = parseInt(b[i])
        const sumDigit = aDigit ^ bDigit ^ carry
        carry = aDigit & bDigit | (aDigit ^ bDigit) & carry

        result = sumDigit.toString() + result
    }

    if (carry) {
        result = "1" + result
    }

    return result
}