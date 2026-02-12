// 题目：有效的括号数
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 示例 1：
// 输入：s = "()"
// 输出：true

// 示例 2：
// 输入：s = "()[]{}"
// 输出：true

// 示例 3：
// 输入：s = "(]"
// 输出：false

// 示例 4：
// 输入：s = "([)]"
// 输出：false

// 示例 5：
// 输入：s = "([{}])"
// 输出：true

/**
 * @returns {boolean}
 * @param {string} s 
 */
function validColumns(s) {
    const stack = []

    for (const ch of s) {
        if (ch === "(" || ch === "[" || ch === "{") {
            stack.push(ch)
        } else {
            const stackTop = stack.pop()
            const combine = stackTop + ch
            if (!(combine === "()" || combine === "[]" || combine === "{}")) {
                return false
            }
        }
    }

    return true
}

console.log(validColumns("()"))
console.log(validColumns("()[]{}"))
console.log(validColumns("(]"))
console.log(validColumns("([)]"))
console.log(validColumns("([{}])"))