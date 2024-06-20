/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    const cache = new Set();
    for (const value of nums) {
        if (cache.has(value))
            return true;
        cache.add(value);
    }
    return false;
};
