function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    const pointers = [];
    while (head) {
        pointers.push(head);
        head = head.next;
    }

    const target = pointers.length - n;
    if (target === 0) {
        return pointers[1] ?? null;
    } else {
        pointers[target - 1].next = pointers[target + 1] ?? null;
        return pointers[0];
    }
}