/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
    const n = grid.length
    const m = grid[0].length

    function deleteIsland(x, y) {
        grid[y][x] = 0
        currArea++

        if (x > 0 && grid[y][x - 1] === 1) { deleteIsland(x - 1, y) }
        if (y > 0 && grid[y - 1][x] === 1) { deleteIsland(x, y - 1) }
        if (x < m - 1 && grid[y][x + 1] === 1) { deleteIsland(x + 1, y) }
        if (y < n - 1 && grid[y + 1][x] === 1) { deleteIsland(x, y + 1) }
    }

    let maxArea = 0
    let currArea = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                currArea = 0
                deleteIsland(j, i)
                maxArea = Math.max(currArea, maxArea)
            }
        }
    }

    return maxArea
}

console.log(maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]))