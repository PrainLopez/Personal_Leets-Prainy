/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const nodesBetweenCriticalPoints = function (head) {
    let prevPtr = head;
    let currPtr = head.next;
    let currIndex = 1;
    let lastCrit = null;
    let firstCrit = null;
    let minDistance = Infinity;

    while (currPtr.next) {
        const nextPtr = currPtr.next;

        if ((prevPtr.val > currPtr.val && nextPtr.val > currPtr.val) ||
            (prevPtr.val < currPtr.val && nextPtr.val < currPtr.val)
        ) {
            if (lastCrit === null) {
                firstCrit = currIndex;
            } else {
                minDistance = Math.min(minDistance, currIndex - lastCrit);
            }
            lastCrit = currIndex;
        }

        prevPtr = currPtr;
        currPtr = currPtr.next;
        currIndex++;
    }

    if (!firstCrit || lastCrit == firstCrit) {
        return [-1, -1];
    }
    return [minDistance, lastCrit - firstCrit];
};