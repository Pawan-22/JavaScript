const movements = [200, 9450, -400, 3000, -650, -130, 70, 5300];

const sum = movements.reduce(function (acc, value, index, array) {
  return acc + value;
});

console.log(sum);

// reduce method reduces an array to a single value based on a specified callback fn.
// Takes 4 args, accumulator, arrayValue, index, array.

// finding max value in array

const maxValue = movements.reduce((acc, val) => {
  if (acc > val) return acc;
  else return val;
});
console.log(maxValue);
