// Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`${index + 1} You deposited ${movement}`);
  } else {
    console.log(`${index + 1} You withdrew ${Math.abs(movement)}`); // removes negative sign
  }
});

// you cant break out of forEach loop.
console.log("---------------------------");

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1} You deposited ${movement}`);
  } else {
    console.log(`${i + 1} You withdrew ${Math.abs(movement)}`); // removes negative sign
  }
}

// forEach with maps & sets

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(key, value);
});

const currenciesUnique = new Set(["USD", "INR", "GBP"]);
currenciesUnique.forEach(function (value, _, map) {
  console.log(value);
});

const pc = {
  name: "lenovo",
  processor: "AMD Ryzen 7",
};

const pc1 = Object.values(pc); // returns array of values
console.log(pc1);

pc1.forEach((obj, index) => {
  console.log(obj, index);
});
