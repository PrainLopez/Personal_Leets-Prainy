/**
 * @param {number[]} nums
 * @return {number}
 */
function sumFourDivisors(nums) {
    return nums.reduce((prev, curr) => (prev + divisorCount4(curr)), 0)
}

/**
 * @param {number} num 
 * @return {number}
 */
function divisorCount4(num) {
    const sqrt = Math.sqrt(num)
    if (num % sqrt == 0) { return 0 }

    let sum = 0
    let count = 0
    for (let i = 0; i < sqrt; i++) {
        if (num % i == 0) {
            sum += (i + Math.floor(num / i))
            count += 2
        }
        if (count > 4) { return 0 }
    }

    return (count == 4) ? sum : 0
}

console.log(sumFourDivisors([21, 4, 7]))
console.log(sumFourDivisors([21, 21]))