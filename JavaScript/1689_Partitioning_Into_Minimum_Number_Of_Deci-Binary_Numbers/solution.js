/**
 * @param {string} n
 * @return {number}
 */
const minPartitions = (n) => (
    Math.max(...n.split('').map(Number))
)