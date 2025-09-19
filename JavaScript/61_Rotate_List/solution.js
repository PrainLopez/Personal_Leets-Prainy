function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
    if (head === null) { return head; }

    let node = head;
    let last = undefined;
    let length = 1;

    while (node.next) {
        last = node;
        node = node.next;
        length++;
    }

    if (length < 2) { return head; }
    node.next = head;

    for (let i = 0; i <= length - k % length; i++) {
        last = node;
        node = node.next;
    }

    last.next = null;
    return node;
};

function buildList(list) {
    list.reverse();
    let last = null;
    let head = null

    while (list.length) {
        const val = list.pop();
        const node = new ListNode(val);
        if (last) {
            last.next = node;
        } else {
            head = node;
        }

        last = node;
    }

    return head;
}

const res = rotateRight(buildList([1]), 4);