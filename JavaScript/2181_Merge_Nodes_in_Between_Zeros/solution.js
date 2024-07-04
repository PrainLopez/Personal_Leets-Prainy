/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const mergeNodes = function (head) {
    if (!head.next) {
        return null;
    }
    const result = new ListNode();
    let currPtr = head.next;

    while (currPtr.val) {
        result.val += currPtr.val;
        currPtr = currPtr.next;
    }

    result.next = mergeNodes(currPtr);

    return result;
};