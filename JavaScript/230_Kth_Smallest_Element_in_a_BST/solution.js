function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
    const list = [];
    function traversal(node) {
        if (node.left) { traversal(node.left); }
        list.push(node.val);
        if (node.right) { traversal(node.right); }
    }
    traversal(root)

    return list.at(k - 1);
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

console.log(kthSmallest(makeTree([3, 1, 4, null, 2]), 1));