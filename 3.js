// 5.3 osszeadas tetele
const sum = (array) => {
  let n = array.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += array[i];
  }
  return result;
};
