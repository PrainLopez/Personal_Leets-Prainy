/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
    let totalOrange = 0
    let rottenOrange = []
    const m = grid.length
    const n = grid[0].length

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const cell = grid[i][j]
            switch (cell) {
                case 0:
                    break
                case 1:
                    totalOrange++
                    break
                case 2:
                    totalOrange++
                    rottenOrange.push([i, j])
                    break
            }
        }
    }

    let depth = 0
    while (rottenOrange.length < totalOrange) {
        const len = rottenOrange.length

        for (let i = rottenOrange.length; i > 0; i--) {
            const [x, y] = rottenOrange[i - 1]

            if (x > 0 && grid[x - 1][y] == 1) {
                grid[x - 1][y] = 2
                rottenOrange.push([x - 1, y])
            }
            if (x + 1 < m && grid[x + 1][y] == 1) {
                grid[x + 1][y] = 2
                rottenOrange.push([x + 1, y])
            }
            if (y > 0 && grid[x][y - 1] == 1) {
                grid[x][y - 1] = 2
                rottenOrange.push([x, y - 1])
            }
            if (y + 1 < n && grid[x][y + 1] == 1) {
                grid[x][y + 1] = 2
                rottenOrange.push([x, y + 1])
            }
        }

        if (len == rottenOrange.length) { return -1 }
        depth++
    }

    return depth
}

console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]))