/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = (arr) => (
    arr.map((val, index) => {
        const value = val
        let count = 0
        while (val > 0) {
            count += val % 2
            val >>= 1
        }

        return { index, value, count }
    }).sort(
        (a, b) => {
            if (a.count - b.count != 0) {
                return a.count - b.count
            } else {
                return a.value - b.value
            }
        }
    ).map(
        (val) => (arr[val.index])
    )
)

console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]))