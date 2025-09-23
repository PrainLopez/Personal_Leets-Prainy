// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    const length = 6;
    const str = "101000";

    const stack = [];
    let opCount = 0;
    for (let i = length - 1; i >= 0; i--) {
        const char = str.charAt(i);
        switch (char) {
            case "1":
                // single "1" will be poped once enter
                if (stack.length) {
                    // if a "0" is inside, do operation 2
                    opCount++;
                }
                break
            case "0":
                if (stack.length) {
                    // if a "0" is inside, do operation 1
                    stack.pop();
                    opCount++;
                } else {
                    stack.push(char);
                }
                break;
        }
    }

    console.log(opCount);
    return;
})();
