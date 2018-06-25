// Írj egy modult, mely négy függvényt exportál: osszeadas, kivonas, osztas, szorzas. A függvények működjenek is. (5p)

const sum = (a, b) => {
  return a + b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const subtract = (a, b) => {
  return a - b;
};

module.exports = {
  sum,
  multiply,
  divide,
  subtract
};
