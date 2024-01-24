function range(length, start = 0, step = 1) {
    if(length === 0) return []
    let result = []
    for (let i = start; i <= start + (length - 1) * step; i+=step) {
        result.push(i)
    }
    return result
}

module.exports = range;
