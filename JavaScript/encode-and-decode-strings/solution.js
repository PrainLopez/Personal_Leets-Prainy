class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""

        for (const word of strs) {
            const length = word.length
            result += length + '|' + word
        }

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []

        while (str) {
            const mark_index = search(str)
            const length = parseInt(str.substring(0, mark_index))
            const word = str.substring(mark_index + 1, mark_index + 1 + length)
            result.push(word)
            str = str.substring(mark_index + 1 + length)
        }

        return result
    }
}

/**
 * @param {string} str
 * @returns {number}
 */
function search(str) {
    let index = 0
    while (index < str.length - 1) {
        const first = str[index]
        const second = str[index + 1]
        if (second === '|' && !isNaN(first)) {
            return index + 1
        }
        index++
    }

    return -1
}

const solution = new Solution()
console.log(solution.decode(solution.encode(["a", "b", "c"])))