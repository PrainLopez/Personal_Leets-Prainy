// Definition for a _Node.
function _Node(val, neighbors) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
};

/**
 * @param {_Node} node
 * @return {_Node}
 */
function cloneGraph(node) {
    if (node === null) { return null }

    const oldToNew = new Map()

    function dfsMapping(node) {
        if (oldToNew.has(node)) { return oldToNew.get(node) }

        const newNode = new _Node(node.val)
        oldToNew.set(node, newNode)
        for (const neighbor of node.neighbors) {
            newNode.neighbors.push(dfsMapping(neighbor))
        }

        return oldToNew.get(node)
    }
    dfsMapping(node)

    return oldToNew.get(node)
}

const n1 = new _Node(1)
const n2 = new _Node(2)
const n3 = new _Node(3)
const n4 = new _Node(4)
n1.neighbors.push(n2, n3)
n2.neighbors.push(n1, n4)
n3.neighbors.push(n1, n4)
n4.neighbors.push(n2, n3)
console.log(cloneGraph(n1))