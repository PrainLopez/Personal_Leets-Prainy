/**
 * @param {number[][]} points
 * @return {number}
 */
function minTimeToVisitAllPoints(points) {
    let minTime = 0

    for (let i = 1; i < points.length; i++) {
        const start = points[i - 1]
        const end = points[i]

        minTime += Math.max(Math.abs(end[0] - start[0]), Math.abs(end[1] - start[1]))
    }

    return minTime
}

console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]))