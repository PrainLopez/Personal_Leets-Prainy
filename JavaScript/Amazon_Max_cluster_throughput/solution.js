'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'getMaxThroughput' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY host_throughput as parameter.
 */

function getMaxThroughput(host_throughput) {
    // Write your code here
    const clusterCount = Math.floor(host_throughput.length / 3);
    host_throughput.sort((a, b) => a - b);
    const hiStack = [];
    const medStack = [];
    while (medStack.length < clusterCount) {
        const host = host_throughput.pop();
        if (hiStack.length < 1) {
            hiStack.push(host);
        } else {
            hiStack.pop();
            medStack.push(host);
        }
    }

    return medStack.reduce((sum, val) => sum + val, 0);
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const host_throughputCount = parseInt(readLine().trim(), 10);

    let host_throughput = [];

    for (let i = 0; i < host_throughputCount; i++) {
        const host_throughputItem = parseInt(readLine().trim(), 10);
        host_throughput.push(host_throughputItem);
    }

    const result = getMaxThroughput(host_throughput);

    ws.write(result + '\n');

    ws.end();
}
