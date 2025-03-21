import { PriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number} k
 * @param {number[]} nums
 */
function KthLargest(k, nums) {
    this.heap = new PriorityQueue((a, b) => (a - b));
    this.k = k

    for (const num of nums) {
        this.heap.enqueue(num);

        if (this.heap.size() > this.k) {
            this.heap.dequeue();
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.enqueue(val);
    if (this.heap.size() > this.k) {
        this.heap.dequeue();
    }

    return this.heap.front();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */