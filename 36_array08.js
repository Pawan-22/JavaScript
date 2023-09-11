// Sorting arrays
// will mutate original array

// Strings
const owners = ["Pawan", "Zendaya", "Jiten", "Shubham", "Rohit"];
console.log(owners.sort()); // sorts alphabetically from A to Z
console.log(owners);

const movements = [200, 9450, -400, 3000, -650, -130, 70, 5300];
movements.sort(); // wont work properly on numbers
console.log(movements);

// Numbers
// return < 0, A, B
// return > 0, B, A

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);

console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

movements.sort((a, b) => b - a);
console.log(movements);
