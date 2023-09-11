const movements = [200, 9450, -400, 3000, -650, -130, 70, 5300];

const account1 = {
  owner: "Shivam Patel",
  pin: 1111,
  movements: [376, 675, -90, 765, 900, -51, 1000],
};

const account2 = {
  owner: "Pawan Patel",
  pin: 2222,
  movements: [100, 200, 500, 10000, 500, -2000],
};
const accounts = [account1, account2];

// flat
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

console.log("---------------------------------------------");

const totalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalBalance);

// flatMap
const totalBalance2 = accounts
  .flatMap((acc) => acc.movements) // only goes one level deep in arrays.
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalBalance);
