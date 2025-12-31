/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    const start = []
    let result = false

    for (const [i, line] of board.entries()) {
        for (const [j, ch] of line.entries()) {
            if (ch === word[0]) {
                start.push([j, i])
            }
        }
    }

    function dfs(i, x, y) {
        if (i == word.length) {
            result = true
            return
        }

        const tmp = board[y][x]
        board[y][x] = "#"
        const searchCoords = []
        if (y > 0) { searchCoords.push([x, y - 1]) }
        if (x < board[0].length - 1) { searchCoords.push([x + 1, y]) }
        if (y < board.length - 1) { searchCoords.push([x, y + 1]) }
        if (x > 0) { searchCoords.push([x - 1, y]) }

        for (const [coordX, coordY] of searchCoords) {
            if (board[coordY][coordX] == word[i]) {
                dfs(i + 1, coordX, coordY)
            }
        }
        board[y][x] = tmp
    }
    for (const [stX, stY] of start) {
        dfs(1, stX, stY)
        if (result) break
    }

    return result
}

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"))