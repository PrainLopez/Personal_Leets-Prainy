/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function (arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i] % 2) {
            case 1:
                counter++;
                break;
            case 0:
                counter = 0;
        };

        if (counter > 2) return true;
    }

    return false;
};