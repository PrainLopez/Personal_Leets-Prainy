// Improvements:
// put index into stack instead of position, stack content doesn't matter for the answer

/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
const survivedRobotsHealths = function (positions, healths, directions) {
    const sortedPos = positions.toSorted((a, b) => a - b);
    const serialMap = new Map;
    positions.forEach((val, i) => {
        serialMap[val] = i;
    });

    const stack = [];
    sortedPos.forEach((val) => {
        stack.push(val);

        while (directions[serialMap[stack.at(-1)]] == "L" && stack?.at(-2) && directions[serialMap[stack.at(-2)]] == "R") {
            const rightPos = stack.pop()
            const leftPos = stack.pop();
            const diff = healths[serialMap[leftPos]] - healths[serialMap[rightPos]]
            if (diff > 0) {
                stack.push(leftPos);
                healths[serialMap[leftPos]] -= 1;
                healths[serialMap[rightPos]] = 0;
            } else if (diff < 0) {
                stack.push(rightPos)
                healths[serialMap[rightPos]] -= 1;
                healths[serialMap[leftPos]] = 0;
            } else {
                healths[serialMap[leftPos]] = 0;
                healths[serialMap[rightPos]] = 0;
            }
        }

    });

    return healths.filter((val) => (val > 0));
};
