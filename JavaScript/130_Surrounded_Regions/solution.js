/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
    const m = board.length
    const n = board[0].length

    function boardFlip(x, y) {
        board[y][x] = "#"

        if (x > 0 && board[y][x - 1] === "O") { boardFlip(x - 1, y) }
        if (y > 0 && board[y - 1][x] === "O") { boardFlip(x, y - 1) }
        if (x + 1 < n && board[y][x + 1] === "O") { boardFlip(x + 1, y) }
        if (y + 1 < m && board[y + 1][x] === "O") { boardFlip(x, y + 1) }
    }

    for (let x = 0; x < n; x++) {
        if (board[0][x] === "O") {
            boardFlip(x, 0)
        }
        if (board[m - 1][x] === "O") {
            boardFlip(x, m - 1)
        }
    }
    for (let y = 0; y < m; y++) {
        if (board[y][0] === "O") {
            boardFlip(0, y)
        }
        if (board[y][n - 1] === "O") {
            boardFlip(n - 1, y)
        }
    }

    board.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell === "O") {
                board[y][x] = "X"
            } else if (cell === "#") {
                board[y][x] = "O"
            }
        })
    })

    return board
}

console.log(solve([["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]))