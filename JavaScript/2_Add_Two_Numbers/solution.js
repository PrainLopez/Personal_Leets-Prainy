function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode();
    let res = dummy;
    let sum = 0;
    let carry = 0;

    while (l1 || l2 || carry) {
        sum = carry

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        const num = sum % 10;
        carry = Math.floor(sum / 10);
        dummy.next = new ListNode(num);
        dummy = dummy.next;
    }

    return res.next;
};