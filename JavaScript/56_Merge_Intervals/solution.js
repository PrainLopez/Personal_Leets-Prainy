/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const res = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currInterval = intervals[i];
        const lastEnd = res.at(-1)[1];

        if (lastEnd >= currInterval[0]) {
            res.at(-1)[1] = Math.max(lastEnd, currInterval[1]);
        } else {
            res.push(currInterval);
        }
    }

    return res;
};