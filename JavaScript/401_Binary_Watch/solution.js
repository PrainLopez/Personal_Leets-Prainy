/**
 * @param {number} turnedOn
 * @return {string[]}
 */
function readBinaryWatch(turnedOn) {
    if (turnedOn === 0)
        return ['0:00']
    if (turnedOn > 8)
        return []

    const result = []

    let q = (1 << turnedOn) - 1
    while (q < (1 << 10)) {
        const time = isValid(q)
        if (time)
            result.push(time)

        const r = q & -q
        const t = q + r
        q = t | (((q ^ t) / r) >> 2)
    }

    return result
}

function isValid(q) {
    const hour = q >> 6
    const minute = q & 0b111111

    if (hour > 11 || minute > 59)
        return null

    return `${hour}:${minute.toString().padStart(2, '0')}`
}