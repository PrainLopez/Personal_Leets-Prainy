/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
    /**
     * @param {string} coordinate
     * @return {string[]}
     */
    function adjacent(coordinate) {
        const [x, y] = coordinate.split("|").map((x) => parseInt(x))
        const currHeight = heights[y][x]
        const output = []

        if (y > 0 && heights[y - 1][x] >= currHeight) {
            output.push(`${x}|${y - 1}`)
        }
        if (y < heights.length - 1 && heights[y + 1][x] >= currHeight) {
            output.push(`${x}|${y + 1}`)
        }
        if (x > 0 && heights[y][x - 1] >= currHeight) {
            output.push(`${x - 1}|${y}`)
        }
        if (x < heights[0].length && heights[y][x + 1] >= currHeight) {
            output.push(`${x + 1}|${y}`)
        }
        return output
    }

    const parcifics = new Set()
    const atlantics = new Set()
    for (let i = 0; i < heights[0].length; i++) {
        parcifics.add(`${i}|0`)
        atlantics.add(`${i}|${heights.length - 1}`)
    }
    for (let i = 1; i < heights.length; i++) {
        parcifics.add(`0|${i}`)
        atlantics.add(`${heights[0].length - 1}|${heights.length - 1 - i}`)
    }

    const parSearchStack = [...parcifics]
    while (parSearchStack.length > 0) {
        const curr = parSearchStack.pop()

        const adj = adjacent(curr)
        for (const coor of adj) {
            if (!parcifics.has(coor)) {
                parcifics.add(coor)
                parSearchStack.push(coor)
            }
        }
    }
    const atlSearchStack = [...atlantics]
    while (atlSearchStack.length > 0) {
        const curr = atlSearchStack.pop()

        const adj = adjacent(curr)
        for (const coor of adj) {
            if (!atlantics.has(coor)) {
                atlantics.add(coor)
                atlSearchStack.push(coor)
            }
        }
    }

    return _.intersection([...atlantics], [...parcifics]).map((str) => str.split("|").map((str) => parseInt(str)).reverse())
}

console.log(pacificAtlantic([[3, 3, 3], [3, 1, 3], [0, 2, 4]]))