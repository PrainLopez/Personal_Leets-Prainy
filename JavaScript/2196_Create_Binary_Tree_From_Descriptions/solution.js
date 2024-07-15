/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
const createBinaryTree = function (descriptions) {
    const nodeMap = new Map();
    const children = new Set();

    descriptions.forEach((val) => {
        children.add(val[1]);

        if (!nodeMap.has(val[0])) {
            nodeMap.set(val[0], new TreeNode(val[0]));
        }
        if (!nodeMap.has(val[1])) {
            nodeMap.set(val[1], new TreeNode(val[1]));
        }

        const parentNode = nodeMap.get(val[0]);
        const childNode = nodeMap.get(val[1]);

        if (val[2]) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }
    });

    for (let val of descriptions) {
        if (!children.has(val[0])) {
            return nodeMap.get(val[0]);
        }
    }
};