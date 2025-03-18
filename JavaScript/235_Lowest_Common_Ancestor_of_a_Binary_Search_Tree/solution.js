function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    const stack = [];
    stack.push(root);

    while (stack.length) {
        const curr = stack.pop();

        const product = (curr.val - p.val) * (curr.val - q.val);
        if (product <= 0) {
            return curr;
        }

        if (curr.right) { stack.push(curr.right); }
        if (curr.left) { stack.push(curr.left); }
    }

    return null;
}