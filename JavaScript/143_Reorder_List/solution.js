function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
* @param {ListNode} head
* @return {void} Do not return anything, modify head in-place instead.
*/
function reorderList(head) {
    const pointers = [];

    while (head) {
        pointers.push(head);
        head = head.next;
    }

    if (pointers < 2) { return; }

    let curr = pointers.shift();
    let next = pointers.pop();

    while (next) {
        curr.next = next;

        curr = next;
        next = pointers.shift();

        if (next) {
            curr.next = next;

            curr = next;
            next = pointers.pop();
        }
    }
    curr.next = null;
}

const root = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(reorderList(root));