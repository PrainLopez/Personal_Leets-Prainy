import { Queue } from "@datastructures-js/queue"

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxProduct(root) {
    function dfsSum(node) {
        if (!node) return 0

        node.val = node.val + dfsSum(node.left) + dfsSum(node.right)
        return node.val
    }

    const fullSum = dfsSum(root)

    const queue = new Queue()
    queue.enqueue(root)
    let result = Number.NEGATIVE_INFINITY
    while (!queue.isEmpty()) {
        const curr = queue.dequeue()
        if (curr.left) queue.enqueue(curr.left)
        if (curr.right) queue.enqueue(curr.right)

        const product = (fullSum - curr.val) * curr.val
        result = Math.max(product, result)
    }

    return result % (10 ** 9 + 7)
}

console.log(maxProduct(new TreeNode(2, new TreeNode(1), new TreeNode(3))))