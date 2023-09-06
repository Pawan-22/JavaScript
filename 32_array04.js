const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const positiveMov = movements.filter(function (value, index, array) {
  return value > 0;
});

console.log(positiveMov);

const negativeMov = movements.filter((mov) => mov < 0);
console.log(negativeMov);

// filter returns an array of specified condition in a callback fn.
