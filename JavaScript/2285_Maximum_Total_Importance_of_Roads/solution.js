/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const maximumImportance = function (n, roads) {
    const hashTable = new Array(n);
    hashTable.fill(0);

    const roadsFlat = roads.flat();

    roadsFlat.forEach((value) => {
        hashTable[value]++;
    });

    hashTable.sort((a, b) => a - b);

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * hashTable[i - 1];
    }

    return sum;
};