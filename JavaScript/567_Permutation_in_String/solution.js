/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const dict1 = new Map();
    for (const ch1 of s1) {
        dict1.set(ch1, dict1.get(ch1) == undefined ? 1 : dict1.get(ch1) + 1);
    }
    const dict2 = new Map();
    let match = dict1.size; // reach 0
    // console.log(dict1);
    for (let i = 0; i < s2.length; i++) {
        if (i >= s1.length) {
            const toRm = s2[i - s1.length];
            dict2.set(toRm, dict2.get(toRm) - 1);
            if (dict1.get(toRm) == dict2.get(toRm)) {
                match--;
            } else if (dict1.get(toRm) - 1 == dict2.get(toRm)) {
                match++;
            }
        }

        const toAdd = s2[i];
        dict2.set(toAdd, (dict2.get(toAdd) ?? 0) + 1);
        if (dict1.get(toAdd) == dict2.get(toAdd)) {
            match--;
        } else if (dict1.get(toAdd) + 1 == dict2.get(toAdd)) {
            match++
        }

        if (match === 0) { return true; }

        // console.log(dict2);
        // console.log(match);
    }

    return false;
};

// console.log(checkInclusion("ab", "eidbaooo"));
// console.log(checkInclusion("ab", "ab"));
// console.log(checkInclusion("abc", "ccccbbbbaaaa"));