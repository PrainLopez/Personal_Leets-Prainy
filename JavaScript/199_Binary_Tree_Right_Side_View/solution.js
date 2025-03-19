function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
    let queue = [];
    if (root) {
        queue.push(root);
    }

    const res = [];

    while (queue.length > 0) {
        res.push(queue.at(-1).val);
        const nextLayer = [];

        for (const node of queue) {
            if (node.left) { nextLayer.push(node.left); }
            if (node.right) { nextLayer.push(node.right); }
        }

        queue = nextLayer;
    }

    return res;
}

const root = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(5))), new TreeNode(3));
console.log(rightSideView(root));