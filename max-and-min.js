function max(nums) {
    if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0]
    return Math.max(...nums)
}

function min(nums) {
    if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0]
    return Math.min(...nums)
}

module.exports = { max, min };
