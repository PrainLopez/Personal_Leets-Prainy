function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
    let res = true;

    function treeSearch(root) {
        if (root === null) { return 0; }

        const leftDepth = treeSearch(root.left);
        const rightDepth = treeSearch(root.right);

        if (Math.abs(leftDepth - rightDepth) > 1) {
            res = false;
        }
        return 1 + Math.max(leftDepth, rightDepth);
    }

    treeSearch(root);

    return res;
}

const root = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)), new TreeNode(2));
console.log(isBalanced(root));