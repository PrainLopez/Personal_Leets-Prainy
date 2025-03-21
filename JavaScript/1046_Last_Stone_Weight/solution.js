import { PriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
    const stonesQueue = new PriorityQueue((a, b) => (b - a));

    for (stone of stones) {
        stonesQueue.enqueue(stone);
    }

    while (stonesQueue.size() > 1) {
        const first = stonesQueue.dequeue();
        const second = stonesQueue.dequeue();

        if (first != second) {
            stonesQueue.enqueue(Math.abs(first - second));
        }
    }

    return stonesQueue.dequeue() ?? 0;
}