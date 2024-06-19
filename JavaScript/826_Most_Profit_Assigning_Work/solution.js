/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
const maxProfitAssignment = function (difficulty, profit, worker) {
    const jobProfile = new Array();
    difficulty.forEach((value, index) => {
        jobProfile.push(new Array(value, profit[index]));
    });
    jobProfile.sort((a, b) => (a[0] - b[0]));

    for (let i = 0; i < jobProfile.length - 2; i++) {
        jobProfile[i + 1][1] = Math.max(jobProfile[i][1], jobProfile[i + 1][1])
    }

    const initialProfit = 0;
    return worker.reduce((accumulator, currentValue) => {
        let left = 0;
        let right = jobProfile.length - 1;
        let jobProfit = 0;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (jobProfile[mid][0] <= currentValue) {
                jobProfit = Math.max(jobProfit, jobProfile[mid][1]);
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return accumulator + jobProfit
    }, initialProfit);
};
