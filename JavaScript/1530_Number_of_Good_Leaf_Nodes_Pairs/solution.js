
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
const countPairs = function (root, distance) {
    let count = 0;

    const treeRecurse = function (root) {
        if (!root) {
            return [];
        }
        if (!root.left && !root.right) {
            return [1];
        }

        const left = treeRecurse(root.left);
        const right = (treeRecurse(root.right));

        for (let l of left) {
            for (let r of right) {
                if (l + r <= distance) {
                    count++;
                }
            }
        }

        return left.concat(right).map((val) => val + 1);
    };

    treeRecurse(root);

    return count;
};

const root = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3));
console.log(countPairs(root, 3));