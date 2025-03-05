class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        intervals.sort((a, b) => (a.start - b.start))
        const endings = []
        intervals.forEach((interval) => {
            const insertIndex = endings.findIndex((ending) => (ending <= interval.start))
            if (insertIndex >= 0) {
                endings[insertIndex] = interval.end
            } else {
                endings.push(interval.end)
            }
        })

        return endings.length
    }
}
