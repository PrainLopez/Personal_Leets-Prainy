/**
 * @param {string} formula
 * @return {string}
 */
const countOfAtoms = function (formula) {
    const stack = [];
    stack.push(new Map());
    let i = 0;
    let currMap = stack[0];
    while (i < formula.length) {
        if (formula[i] == "(") {
            stack.push(new Map());
            currMap = stack.at(-1)
        }
        else if (formula[i] == ")") {
            let count = "";
            while (/\d/.test(formula[i + 1])) {
                count += formula[i + 1];
                i++;
            }
            if (count == "") {
                count = "1";
            }
            const lastMap = stack.pop();
            currMap = stack.at(-1);
            lastMap.forEach((val, key) => {
                if (currMap.get(key) == undefined) {
                    currMap.set(key, val * Number.parseInt(count));
                }
                else {
                    currMap.set(key, currMap.get(key) + val * Number.parseInt(count));
                }
            })
        }
        else {
            let element = formula[i];
            if (i + 1 < formula.length && /[a-z]/.test(formula[i + 1])) {
                element += formula[i + 1];
                i++;
            }

            let count = "";
            while (/\d/.test(formula[i + 1])) {
                count += formula[i + 1];
                i++;
            }
            if (count == "") {
                count = "1";
            }

            if (currMap.get(element) == undefined) {
                currMap.set(element, Number.parseInt(count));
            }
            else {
                currMap.set(element, currMap.get(element) + Number.parseInt(count));
            }
        }

        i++;
    }

    countMap = stack.pop();
    sortedArr = [];
    for (let key of countMap.keys()) {
        sortedArr.push(key);
    }
    sortedArr.sort();
    res = [];
    sortedArr.forEach((key) => {
        res.push(key);
        if (countMap.get(key) > 1) {
            res.push(countMap.get(key).toString());
        }
    });

    return res.join("");
};
