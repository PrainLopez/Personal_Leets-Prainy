function partition(s) {
    const result = []

    function partitionMonad(subs, s) {
        if (s.length < 2) {
            if (s !== "") subs.push(s)
            result.push(subs)
            return
        }

        for (let i = 1; i <= s.length; i++) {
            const sub = s.slice(0, i)
            if (palindrome(sub)) {
                partitionMonad(subs.concat([sub]), s.slice(i))
            }
        }
    }
    partitionMonad([], s)

    return result
};

function palindrome(str) {
    const length = str.length
    if (length < 2) return true

    for (let i = 0; i < (length / 2); i++) {
        if (str[i] != str[length - 1 - i]) return false
    }

    return true
}

// console.log(partition("aab"))
// console.log(partition("a"))
console.log(partition("bbcabba"))