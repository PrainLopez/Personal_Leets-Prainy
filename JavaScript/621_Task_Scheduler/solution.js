import { PriorityQueue } from '@datastructures-js/priority-queue'

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
    const taskMap = new Map()
    tasks.forEach((val) => {
        if (taskMap.has(val)) {
            taskMap.set(val, 1 + taskMap.get(val))
        } else {
            taskMap.set(val, 1)
        }
    })

    const taskPriorityQueue = PriorityQueue.fromArray(Array.from(taskMap), (a, b) => (b[1] - a[1]))

    const taskQueue = []
    const blockingQueue = []
    while (!taskPriorityQueue.isEmpty() || blockingQueue.length) {
        const task = taskPriorityQueue.dequeue()
        if (task) {
            task[1]--
            taskQueue.push(task[0])
            if (task[1] > 0) {
                blockingQueue.push(task)
            } else {
                blockingQueue.push(null)
            }
        } else {
            taskQueue.push(null)
            blockingQueue.push(null)
            if (!blockingQueue.some((val) => (!!val))) {
                break
            }
        }
        if (blockingQueue.length > n) {
            const unblocked = blockingQueue.shift()
            if (unblocked) {
                taskPriorityQueue.enqueue(unblocked)
            }
        }
    }

    return taskQueue.slice(0, 1 + taskQueue.findLastIndex((val) => (!!val))).length
}

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2))