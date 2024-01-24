function sumDigits(num) {
  if (num < 10) return num;

  const str = num.toString();

  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[0-9]/.test(str[i])) {
      result += Number(str[i]);
    }
  }
  return result;
}

module.exports = sumDigits;
