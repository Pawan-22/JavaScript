const movements = [200, 9450, -400, 3000, -650, -130, 70, 5300];
const account1 = {
  owner: "Shivam Patel",
  pin: 1111,
};

const account2 = {
  owner: "Pawan Patel",
  pin: 2222,
  movements: [100, 200, 500, 10000, 500, -2000],
};
const accounts = [account1, account2];

// find method
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find((acc) => acc.owner === "Pawan Patel");
console.log(account);

// some & every method

// checks equality
console.log(movements.includes(3000)); // include method , returns boolean

// some: checks elements for condition
const anyDeposits = movements.some((mov) => mov > 0); // returns boolean
console.log(anyDeposits);

// every: checks each and every element for given condition
const everyDeposits = account2.movements.every((mov) => mov > 0);
console.log(everyDeposits);

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
