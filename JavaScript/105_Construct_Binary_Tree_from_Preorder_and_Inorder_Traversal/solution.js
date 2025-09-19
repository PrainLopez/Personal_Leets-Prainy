function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
    if (!preorder.length) { return null; }

    const nodeVal = preorder.shift();
    const node = new TreeNode(nodeVal);

    const split = inorder.indexOf(nodeVal);
    const left = inorder.slice(0, split);
    const right = inorder.slice(split + 1);

    node.left = buildTree(preorder.slice(0, left.length), left);
    node.right = buildTree(preorder.slice(left.length), right);

    return node;
};

const tree = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);