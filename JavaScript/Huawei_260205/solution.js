/**
 * @param {number} n
 */
function pyramidChar(n) {
    const maxIndent = n

    for (let i = 0; i <= n; i++) {
        let line = ""

        for (let indent = 0; indent < maxIndent - i; indent++) {
            line += " "
        }

        for (let num = 1; num <= i; num++) {
            line += num.toString()
        }

        for (let num = i - 1; num > 0; num--) {
            line += num.toString()
        }

        console.log(line)
    }
}

pyramidChar(1)
pyramidChar(5)
pyramidChar(9)