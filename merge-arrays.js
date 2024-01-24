function mergeArrays(array1, array2) {
    if(array1.length === 0 && array2.length === 0) return []
    if(array1.length === 0 && array2.length > 0) return array2
    if(array1.length > 0 && array2.length === 0) return array1

    const longestArray = Math.max(array1.length, array2.length)

    let newArray = []
    for (let i = 0; i < longestArray; i++) {
        if(array1[i]) {
         newArray.push(array1[i])
        }
        if(array2[i]) {
            newArray.push(array2[i])
        }
    }
    return newArray
}

module.exports = mergeArrays;
