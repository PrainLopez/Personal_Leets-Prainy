/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
function mostBooked(n, meetings) {
    const nextAvailable = Array.from({ length: n }, () => (0))
    const holdCount = Array.from({ length: n }, () => (0))

    meetings.sort((a, b) => (a[0] - b[0])).forEach((meeting) => {
        const roomIndex = nextAvailable.findIndex((n) => (n <= meeting[0]))

        if (roomIndex >= 0) {
            nextAvailable[roomIndex] = meeting[1];
            holdCount[roomIndex]++
        } else {
            const [newStart, newRoom] = nextAvailable.reduce((prev, curr, index) => (
                (prev[0] > curr) ? [curr, index] : prev
            ), [Infinity, NaN])

            nextAvailable[newRoom] = newStart + meeting[1] - meeting[0]
            holdCount[newRoom]++
        }
    })

    const [_, output] = holdCount.reduce((prev, curr, index) => (
        (prev[0] < curr) ? [curr, index] : prev
    ), [0, NaN])
    return output
}

console.log(mostBooked(3, [[1, 20], [2, 10], [3, 5], [4, 9], [6, 8]]))