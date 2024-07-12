/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const maximumGain = function (s, x, y) {
    if (s.length < 2) { return 0 }

    /**
     * @param {string} str 
     * @return {string}
     */
    const removeSubstrings = function (str) {
        const stack = [];
        stack.push(s[0]);

        for (let i = 1; i < s.length; i++) {
            if (stack[stack.length - 1] + s[i] == str) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }

        return stack.join("");
    }

    const str = x > y ? "ab" : "ba"
    let score = 0;
    const s1 = removeSubstrings(str, Math.max(x, y));
    score += (s.length - s1.length) / 2 * Math.max(x, y);
    s = s1;
    const s2 = removeSubstrings(str[1] + str[0], Math.min(x, y));
    score += (s.length - s2.length) / 2 * Math.min(x, y);

    return score;
};
