// 5.6 unio

const union = (array1, array2) => {
  let union = [];
  let i = 0;
  for (i; i < array1.length; i++) {
    union[i] = array1[i];
  }
  let k = array1.length;

  for (let j = 0; j < array2.length; j++) {
    i = 0;
    while (i < array1.length && array2[j] !== array1[i]) {
      i++;
    }
    if (i >= array1.length) {
      union[k] = array2[j];
      k++;
    }
  }
  return union;
};
