/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = function (target, arr) {
    const mapping = arr.reduce((hashMap, curr) => {
        const get = hashMap.get(curr);

        if (get == undefined) {
            hashMap.set(curr, 1);
        } else {
            hashMap.set(curr, get + 1);
        }

        return hashMap;
    }, new Map());

    for (let element of target) {
        if (mapping.get(element) > 0) {
            mapping.set(element, mapping.get(element) - 1);
        } else {
            return false;
        }
    }

    return true;
};
