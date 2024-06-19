/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const minDays = function (bloomDay, m, k) {
    if (m * k > bloomDay.length)
        return -1;

    let left = 0;
    let right = bloomDay.reduce((accumulator, currentValue) => (
        Math.max(accumulator, currentValue)
    ), 0);

    let minDay = -1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        const bonquets = Math.floor(bloomDay.reduce((accumulator, currentValue) => {
            if (mid >= currentValue)
                return accumulator + 1;
            else
                return accumulator - (accumulator % k);
        }, 0) / k);

        if (bonquets >= m) {
            minDay = mid;
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return minDay;
};
