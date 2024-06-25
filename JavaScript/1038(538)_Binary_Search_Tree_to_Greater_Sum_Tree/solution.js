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
const bstToGst = function (root) {
    const stack = [];
    let currNode = root;
    let currSum = 0;

    while (stack.length || currNode) {
        while (currNode) {
            stack.push(currNode);
            currNode = currNode.right;
        }

        currNode = stack.pop();

        currSum += currNode.val;
        currNode.val = currSum;

        currNode = currNode.left;
    }

    return root;
};