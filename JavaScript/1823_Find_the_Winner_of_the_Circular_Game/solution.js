/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    const friends = new Array(n);
    for (let i = 0; i < n; i++) {
        friends[i] = i + 1;
    }

    let complement = 0;
    while (friends.length > 1) {
        const lose = (complement + k) % friends.length;
        friends.splice(lose - 1, 1);
        complement = lose - 1;
        if (complement < 0) {
            complement = friends.length;
        }
    }

    return friends[0];
};
