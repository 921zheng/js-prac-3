function sumArgs(...nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "object") {
      nums[i] = nums[i].reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
    }
    if (typeof nums[i] === "string") nums[i] = Number(nums[i]);

    sum += nums[i];
  }
  return sum;
}

module.exports = sumArgs;
