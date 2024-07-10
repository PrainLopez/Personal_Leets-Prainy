/**
 * @param {string} s
 * @return {string}
 */
const reverseParentheses = function func(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ")") {
            const portion = [];

            while (stack[stack.length - 1] != "(") {
                portion.push(stack.pop());
            }
            stack.pop();
            while (portion.length > 0) {
                stack.push(portion.shift());
            }
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join("");
};
