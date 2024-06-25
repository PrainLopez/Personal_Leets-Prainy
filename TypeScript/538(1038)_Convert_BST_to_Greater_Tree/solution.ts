/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function convertBST(root: TreeNode | null): TreeNode | null {
    const stack: TreeNode[] = [];
    let currNode: TreeNode | null = root;
    let currSum = 0;

    while (stack.length || currNode) {
        while (currNode) {
            stack.push(currNode);
            currNode = currNode.right;
        }

        currNode = stack.pop() || new TreeNode();
        currSum += currNode?.val;
        currNode.val = currSum;

        currNode = currNode.left;
    }

    return root;
}
