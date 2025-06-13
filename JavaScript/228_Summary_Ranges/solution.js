/**
 * @param {number[]} nums
 * @return {string[]}
 */
function summaryRanges(nums) {
    if (!nums.length) { return []; }

    const res = [];
    let last = nums[0];
    let start = nums[0];

    for (const num of nums) {
        if ((num - last) > 1) {
            if (last == start) {
                res.push(`${last}`);
            } else {
                res.push(`${start}->${last}`);
            }

            start = num;
        }
        last = num;
    }
    if (last == start) {
        res.push(`${last}`);
    } else {
        res.push(`${start}->${last}`);
    }

    return res;
};