console.log(2 ** 53 - 1); // Biggest number that Js can represent safely
console.log(Number.MAX_SAFE_INTEGER);

console.log(54545455555554104870828888278388n); // n transforms number to bigInt
console.log(BigInt(52425));

// Operations
console.log(1000n + 1000n);
console.log(2415452514555451n * 21814561656656n);

// console.log(2415452514555451n * 21814561656656); // error , cannot use BigInt with other types

console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(20n == 20); // true
console.log(20n == "20"); // true

console.log(326549625n + " is really big");

console.log(10n / 3n); // 3n
