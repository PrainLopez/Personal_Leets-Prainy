import { Queue } from "@datastructures-js/queue"

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function subtreeWithAllDeepest(root) {
    let deepestLevel
    const bfsQueue = new Queue()
    bfsQueue.enqueue(root)
    while (bfsQueue.size()) {
        deepestLevel = bfsQueue.toArray()
        const levelSize = bfsQueue.size()
        for (let i = 0; i < levelSize; i++) {
            const currNode = bfsQueue.dequeue()
            if (currNode.left) {
                bfsQueue.enqueue(currNode.left)
                currNode.left.parent = currNode
            }
            if (currNode.right) {
                bfsQueue.enqueue(currNode.right)
                currNode.right.parent = currNode
            }
        }
    }

    // Lowest Common Ancestor (LCA)
    while (deepestLevel.some((item) => (item !== deepestLevel[0]))) {
        deepestLevel = deepestLevel.map((val) => (val.parent))
    }

    return deepestLevel[0]
}

console.log(subtreeWithAllDeepest(new TreeNode(0, new TreeNode(1, new TreeNode(4), new TreeNode(2)), new TreeNode(3))))