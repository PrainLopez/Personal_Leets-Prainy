
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
const delNodes = function (root, to_delete) {
    const roots = new Set();
    roots.add(root);

    function deleteNode(currNode) {
        if (!currNode) { return null; }

        let res = currNode;
        if (to_delete.includes(currNode.val)) {
            roots.delete(currNode);
            if (currNode.left) { roots.add(currNode.left); }
            if (currNode.right) { roots.add(currNode.right); }
            res = null;
        }

        currNode.left = deleteNode(currNode.left);
        currNode.right = deleteNode(currNode.right);
        return res;
    };

    deleteNode(root); // deleteNode() will implicitly add result to roots 

    return Array.from(roots);
};

const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3, new TreeNode(6), new TreeNode(5)));
console.log(delNodes(
    root,
    [3, 5]
))