/**
 * @param {string} word
 * @return {number}
 */
const minimumPushes = function (word) {
    if (word.length <= 8) { return word.length; }

    const mapping = new Array(26).fill(0);

    for (let i = 0; i < word.length; i++) {
        const serial = word.charCodeAt(i) - 97;
        mapping[serial] += 1;
    }
    mapping.sort((a, b) => b - a);

    return mapping.reduce((prev, val, i) => (
        prev + val * Math.ceil((i + 1) / 8)
    ), 0);
};
