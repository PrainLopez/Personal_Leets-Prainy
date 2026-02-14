/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
function champagneTower(poured, query_row, query_glass) {
    const overflow = [[]]
    if (poured > 1) {
        overflow[0].push((poured - 1) / 2)
    } else {
        overflow[0].push(0)
    }
    for (let row = 1; row < query_row; row++) {
        const newRow = []
        for (let glass = 0; glass <= row; glass++) {
            const input = (overflow[row - 1][glass - 1] || 0) + (overflow[row - 1][glass] || 0)
            if (input > 1) {
                newRow.push((input - 1) / 2)
            } else {
                newRow.push(0)
            }
        }
        overflow.push(newRow)
    }

    if (query_row > 0) {
        const query_glass_input = (overflow[query_row - 1][query_glass - 1] || 0) + (overflow[query_row - 1][query_glass] || 0)
        return Math.min(1, query_glass_input)
    } else {
        return Math.min(1, poured)
    }
}