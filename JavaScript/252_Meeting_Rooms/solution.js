class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => (a.start - b.start))
        let lastFinish = 0
        for (const interval of intervals) {
            if (interval.start >= lastFinish) {
                lastFinish = interval.end
            } else {
                return false
            }
        }

        return true
    }
}
