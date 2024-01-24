function removeDuplicates(arr) {
  const newArray = [];

  if (arr.length === 0) return [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

module.exports = removeDuplicates;
