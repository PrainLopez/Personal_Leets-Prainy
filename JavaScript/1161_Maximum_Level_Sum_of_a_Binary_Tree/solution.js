import { Queue } from '@datastructures-js/queue'

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxLevelSum(root) {
    let maxSum = Number.NEGATIVE_INFINITY
    let maxSumLevel = 0
    let level = 0

    const queue = new Queue().enqueue(root)

    let currentSum
    while (!queue.isEmpty()) {
        level++
        currentSum = 0
        const size = queue.size()
        for (let i = 0; i < size; i++) {
            const node = queue.dequeue()
            currentSum += node.val
            if (node.left) {
                queue.enqueue(node.left)
            }
            if (node.right) {
                queue.enqueue(node.right)
            }
        }

        if (currentSum > maxSum) {
            maxSum = currentSum
            maxSumLevel = level
        }
    }

    return maxSumLevel
}