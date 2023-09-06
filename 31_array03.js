const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

const movementsUSD = movements.map((mov) => mov * euroToUsd);

console.log(movements);
console.log(movementsUSD);

const movementDesc = movements.map((movement, index, array) => {
  if (movement > 0) {
    return `${index + 1} You deposited ${movement}`;
  } else {
    return `${index + 1} You withdrew ${Math.abs(movement)}`; // removes negative sign
  }
});
console.log(movementDesc);

// map  calls a callack fn on each element of an array & returns an array containing results
