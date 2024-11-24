/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    const numStack = [];
    for (const token of tokens) {
        if (Number.isSafeInteger(parseInt(token))) {
            numStack.push(parseInt(token));
        } else {
            const secondNum = parseInt(numStack.pop());
            const firstNum = parseInt(numStack.pop());
            switch (token) {
                case "+":
                    numStack.push(firstNum + secondNum);
                    break;
                case "-":
                    numStack.push(firstNum - secondNum);
                    break;
                case "*":
                    numStack.push(firstNum * secondNum);
                    break;
                case "/":
                    numStack.push(firstNum / secondNum);
                    break;
            }
        }
    }

    return parseInt(numStack.pop());
};