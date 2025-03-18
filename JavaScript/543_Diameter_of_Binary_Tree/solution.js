function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
    let diameter = 0

    function dfs(curr) {
        if (curr === null) {
            return 0
        }

        const left = dfs(curr.left)
        const right = dfs(curr.right)
        diameter = Math.max(diameter, left + right)
        return (Math.max(left, right) + 1)
    }

    dfs(root)
    return diameter
}