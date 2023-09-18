console.log(Math.sqrt(25)); // 5

console.log(Math.max(5, 18, 28, 899)); // 899
console.log(Math.max(5, 18, 28, "899")); //899
console.log(Math.max(6, 5, 78, "100px")); // NaN

console.log(Math.min(-5, 18, 28, 899)); // -5
console.log(Math.min(5, 18, 28, "899")); // 5
console.log(Math.min(6, 5, 78, "100px")); // NaN

console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.trunc(Math.random() * 6 + 1));

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(0, 100));

// Rounding Integers
console.log(Math.round(25.32)); // 25
console.log(Math.round(25.82)); // 26

console.log(Math.ceil(25.32)); // 26
console.log(Math.ceil(25.82)); // 26

console.log(Math.floor(25.32)); // 25
console.log(Math.floor(25.82)); // 25

console.log(Math.trunc(-25.3)); // -25
console.log(Math.floor(-25.3)); // -26

// Rounding decimals
console.log((2.7).toFixed(5)); // returns string,  2.70000
console.log((2.7).toFixed(0)); // 3
console.log((3.5688).toFixed(2)); // 3.57

// Remainder Operator

console.log(5 % 2);

const isEvenOrOdd = (n) => (n % 2 === 0 ? "Even" : "Odd");
console.log(isEvenOrOdd(6));
console.log(isEvenOrOdd(23));
