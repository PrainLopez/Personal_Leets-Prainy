function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    const res = [];

    function traversal(root, depth) {
        if (root === null) { return; }

        if (!res[depth]) { res.push([]); }
        res.at(depth).push(root.val);

        traversal(root.left, depth + 1);
        traversal(root.right, depth + 1);
    }

    traversal(root, 0);
    return res;
}