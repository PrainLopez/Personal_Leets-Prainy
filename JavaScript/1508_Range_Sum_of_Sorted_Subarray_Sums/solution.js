import {
    MinPriorityQueue
} from '@datastructures-js/priority-queue';

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeSum = function (nums, n, left, right) {
    const mod = 10 ** 9 + 7;
    const pq = new MinPriorityQueue({ priority: x => x.sum });

    for (let i = 0; i < n; i++) {
        pq.enqueue({ sum: nums[i], start: i, end: i });
    }

    let result = 0;
    for (let i = 1; i <= right; i++) {
        const current = pq.dequeue().element;
        if (i >= left) {
            result = (result + current.sum) % mod;
        }
        if (current.end < n - 1) {
            current.sum += nums[++current.end];
            pq.enqueue(current);
        }
    }

    return result;
};
