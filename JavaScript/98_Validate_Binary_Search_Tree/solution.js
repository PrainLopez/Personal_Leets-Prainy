function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
    function search(node, max, min) {
        if (node.val <= min || node.val >= max) {
            return false;
        }

        if (node.left) {
            if (!search(node.left, node.val, min)) { return false; }
        }
        if (node.right) {
            if (!search(node.right, max, node.val)) { return false; }
        }

        return true;
    }

    return search(root, Infinity, Number.NEGATIVE_INFINITY);
};

// debug code
function makeTree(rootList) {
    let breadth = 1;
    let lastLine = []

    const root = new TreeNode(rootList.shift());
    lastLine.push(root);

    while (rootList.length) {
        breadth = lastLine.length * 2;

        const line = rootList.slice(0, breadth).reverse();
        const thisLine = [];
        lastLine.forEach((val) => {
            const valLeft = line.pop() ?? Number.NaN;
            const valRight = line.pop() ?? Number.NaN;
            if (!Number.isNaN(valLeft)) {
                const nodeLeft = new TreeNode(valLeft);
                val.left = nodeLeft;
                thisLine.push(nodeLeft);
            }
            if (!Number.isNaN(valRight)) {
                const nodeRight = new TreeNode(valRight);
                val.right = nodeRight;
                thisLine.push(nodeRight);
            }
        });
        lastLine = thisLine;

        rootList = rootList.slice(breadth);
    }

    return root;
}

console.log(isValidBST(makeTree([5, 1, 4, null, null, 3, 6])));