function _Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

/**
 * @param {_Node} head
 * @return {_Node}
 */
function copyRandomList(head) {
    const mapping = new Map();

    let ptr = head;
    while (ptr) {
        mapping.set(ptr, new _Node(ptr.val, null, null));
        ptr = ptr.next;
    }

    ptr = head;
    while (ptr) {
        const curr = mapping.get(ptr);
        curr.next = mapping.get(ptr.next) ?? null;
        curr.random = mapping.get(ptr.random) ?? null;

        ptr = ptr.next;
    }

    return mapping.get(head);
}