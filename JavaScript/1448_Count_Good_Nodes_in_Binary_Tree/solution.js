function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const goodNodes = function (root) {
    function nodeCount(node, maxVal) {
        let count = 0;
        if (maxVal <= node.val) {
            count++;
            maxVal = node.val;
        }
        if (node.left) {
            count += nodeCount(node.left, maxVal);
        }
        if (node.right) {
            count += nodeCount(node.right, maxVal);
        }

        return count;
    }

    return nodeCount(root, Number.NEGATIVE_INFINITY);
};

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

goodNodes(makeTree([3, 1, 4, 3, null, 1, 5]))