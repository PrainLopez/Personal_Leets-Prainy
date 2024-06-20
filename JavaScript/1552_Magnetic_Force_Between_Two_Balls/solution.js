/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
const maxDistance = function (position, m) {
    position.sort((a, b) => (a - b));
    const placeBallsCheck = placingBall.bind(null, position);

    let left = 0;
    let right = position[position.length - 1] - position[0];
    let maxMinForce = 0;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (placeBallsCheck(mid) >= m) {
            maxMinForce = Math.max(maxMinForce, mid);
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return maxMinForce;
};

/**
 * @param {number[]} position
 * @param {number} minForce
 * @return {number}
 */
const placingBall = function (position, minForce) {
    let prevBallPos = position[0];
    let placedBall = 1;
    position.forEach((value) => {
        if (value >= prevBallPos + minForce) {
            placedBall++;
            prevBallPos = value;
        }
    });

    return placedBall;
}
