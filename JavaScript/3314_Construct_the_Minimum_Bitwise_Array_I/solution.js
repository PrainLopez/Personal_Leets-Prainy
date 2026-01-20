/**
 * @param {number[]} nums
 * @return {number[]}
 */
const minBitwiseArray = (nums) => (
    nums.map((num) => {
        let res = -1
        let d = 1
        while ((num & d) != 0) {
            res = num - d
            d <<= 1
        }

        return res
    })
)