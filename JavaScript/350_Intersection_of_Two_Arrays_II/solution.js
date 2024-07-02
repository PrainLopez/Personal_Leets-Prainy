/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    const sortedNums1 = nums1.toSorted((a, b) => b - a);
    const sortedNums2 = nums2.toSorted((a, b) => b - a);

    const intersection = [];
    let curr1 = sortedNums1.pop();
    let curr2 = sortedNums2.pop();
    while (Number.isInteger(curr1) && Number.isInteger(curr2)) {
        if (curr1 == curr2) {
            intersection.push(curr1);
            curr1 = sortedNums1.pop();
            curr2 = sortedNums2.pop();
        }
        else if (curr1 > curr2) {
            curr2 = sortedNums2.pop();
        }
        else {
            curr1 = sortedNums1.pop();
        }
    }

    return intersection;
};
