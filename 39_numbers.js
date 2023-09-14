console.log(0.1 + 0.2 === 0.3); // false

// Convert string to number
console.log(Number("25")); // 25
console.log(+"25"); // 25

// Parsing
console.log(Number.parseInt("2556px", 10)); // 2556
console.log(Number.parseInt("a2556px")); // NaN

console.log(Number.parseFloat("2.5rem")); // 2.5
console.log(Number.parseInt("2.5rem")); // 2

// Check value is not a number
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20x")); // true
console.log(23 / 0); // infinity

// Checking if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite(20 / 0)); // false
console.log(Number.isFinite("20")); // false

console.log(Number.isInteger(25)); // true
console.log(Number.isInteger(25.0)); // false
console.log(Number.isInteger(25 / 0)); // false
