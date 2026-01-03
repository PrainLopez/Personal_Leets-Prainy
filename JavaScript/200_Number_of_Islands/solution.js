/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    const n = grid.length
    const m = grid[0].length

    function deleteIsland(x, y) {
        grid[y][x] = "0"

        if (x > 0 && grid[y][x - 1] === "1") { deleteIsland(x - 1, y) }
        if (y > 0 && grid[y - 1][x] === "1") { deleteIsland(x, y - 1) }
        if (x < m - 1 && grid[y][x + 1] === "1") { deleteIsland(x + 1, y) }
        if (y < n - 1 && grid[y + 1][x] === "1") { deleteIsland(x, y + 1) }
    }

    let result = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === "1") {
                deleteIsland(j, i)
                result++
            }
        }
    }

    return result
}