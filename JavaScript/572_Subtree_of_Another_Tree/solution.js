function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    if (p?.val === q?.val) {
        if (p === null) {
            return true;
        } else {
            return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
        }
    } else {
        return false;
    }
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
    if (root === null) {
        return false;
    }

    if (root.val === subRoot.val && isSameTree(root, subRoot)) {
        return true;
    }
    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));
}