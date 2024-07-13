// Improvements:
// 1 - put index into stack instead of position, stack content doesn't matter for the answer
// 2 - health can be used as a mark to improve control flow
// 3 - We don't need left oriented robot in the stack. This includes the incoming bot collides all bots in the stack.

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
        const rightIndex = serialMap[val];

        if (directions[rightIndex] == "R") {
            stack.push(rightIndex);
        } else {
            while (stack.length /* && directions[stack.at(-1)] == "R" */ && healths[rightIndex]) {
                const leftIndex = stack.pop();
                if (healths[leftIndex] > healths[rightIndex]) {
                    healths[leftIndex] -= 1;
                    healths[rightIndex] = 0;
                    stack.push(leftIndex);
                } else if (healths[leftIndex] < healths[rightIndex]) {
                    healths[rightIndex] -= 1;
                    healths[leftIndex] = 0;
                } else {
                    healths[leftIndex] = 0;
                    healths[rightIndex] = 0;
                }
            }

            // if (healths[rightIndex]) {
            //     stack.push(rightIndex);
            // }
        }

    });

    return healths.filter((val) => (val > 0));
};
