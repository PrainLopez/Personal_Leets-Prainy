/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    const resSequence = Array.from({ length: n + 1 }, () => []);
    resSequence[0] = [''];

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            for (const left of resSequence[j]) {
                for (const right of resSequence[i - j - 1]) {
                    resSequence[i].push('(' + left + ')' + right);
                }
            }
        }
    }

    return resSequence[n];
};