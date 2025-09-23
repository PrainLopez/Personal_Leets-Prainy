const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while (line = await readline()) {
        // query
        let tokens = line.split(' ');
        let l = parseInt(tokens[0]);
        let r = parseInt(tokens[1]);
        console.log(l + r);
    }
}()
