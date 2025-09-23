const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const length = parseInt(await readline());
    const numbers = (await readline()).split(" ")
    numbers.forEach((ele) => parseInt(ele));

    let count = 0;

    while (!numbers.includes(1)) {
        numbers.forEach((ele) => (
            (ele % 2 == 0) ? (ele / 2) : (3 * ele + 1)
        ));
        count++
    }
    let indexes = 1;
    while (indexes.length < length) {
        numbers.forEach((ele) => (
            (ele % 2 == 0) ? (ele / 2) : (3 * ele + 1)
        ));
        if (numbers.includes(1)) { return -1; }
        count++;
        numbers.forEach((ele) => (
            (ele % 2 == 0) ? (ele / 2) : (3 * ele + 1)
        ));
        if (numbers.includes(1)) { return -1; }
        count++;
        numbers.forEach((ele) => (
            (ele % 2 == 0) ? (ele / 2) : (3 * ele + 1)
        ));
        indexes = numbers.reduce((prev, curr) => ((curr == 1 ? prev + 1 : prev), 0));
        count++;
    }
    return count;
}()
