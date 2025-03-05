function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
    if (root === null) { return root }
    if (root.left != null || root.right != null) {
        const temp = root.left
        root.left = root.right
        root.right = temp
        if (root.left != null) { invertTree(root.left) }
        if (root.right != null) { invertTree(root.right) }
    }

    return root
}