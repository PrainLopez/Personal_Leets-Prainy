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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
const getDirections = function (root, startValue, destValue) {
    const dfsRoute = function (currNode, path, target) {
        if (!currNode) {
            return;
        }
        if (currNode.val == target) {
            return path;
        }

        let res;
        path.push("L");
        res = dfsRoute(currNode.left, path, target);
        if (res) { return res; }
        path.pop();
        path.push("R");
        res = dfsRoute(currNode.right, path, target);
        if (res) { return res; }
        path.pop();
        return;
    };

    const pathStart = dfsRoute(root, [], startValue);
    const pathDest = dfsRoute(root, [], destValue);
    const step = Math.min(pathStart.length, pathDest.length);

    for (let i = 0; i < step; i++) {
        if (pathDest[0] == pathStart[0]) {
            pathStart.shift();
            pathDest.shift();
        } else {
            break;
        }
    }
    return pathStart.map(() => "U").concat(pathDest).join("");
};
