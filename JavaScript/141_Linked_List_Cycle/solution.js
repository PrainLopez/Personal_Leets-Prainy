function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    const set = new Set();

    while (head) {
        if (set.has(head)) { return true; }
        set.add(head);
        head = head.next;
    }

    return false;
}