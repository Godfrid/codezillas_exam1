// megszamlalas tetele

let count = (array) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      counter++;
    }
  }
  return counter;
};
