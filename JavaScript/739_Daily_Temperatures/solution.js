/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
    const decreasing = [];
    const res = Array.from({ length: temperatures.length }, () => 0)
    for (let i = 0; i < temperatures.length; i++) {
        const temp = temperatures[i];
        if (Number.isInteger(decreasing.at(-1)) && temperatures[decreasing.at(-1)] < temp) {
            while (decreasing.length > 0 && temperatures[decreasing.at(-1)] < temp) {
                const day = decreasing.pop();
                if (res[day] == 0) {
                    res[day] = i - day;
                    // console.log([i, day]);
                }
            }
        }
        decreasing.push(i);
        // console.log(decreasing);
    }

    return res;
};

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));