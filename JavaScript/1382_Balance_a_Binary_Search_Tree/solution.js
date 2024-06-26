/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const balanceBST = function (root) {
    const nodeArr = inorderTraversal(root);

    return balancing(0, nodeArr.length - 1, nodeArr);
};

const inorderTraversal = function (node) {
    if (!node) {
        return [];
    }
    return (inorderTraversal(node.left).concat(node.val).concat(inorderTraversal(node.right)));
};

const balancing = function (left, right, array) {
    if (left > right) {
        return
    }
    const mid = Math.floor(left + (right - left) / 2);

    const leftNode = balancing(left, mid - 1, array);
    const rightNode = balancing(mid + 1, right, array);

    const node = new TreeNode(array[mid], leftNode, rightNode);
    return node;
};
