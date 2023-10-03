// Constructor function & New operator
// In OOP contructor function starts with a capital letter

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jay = new Person("Jay", 1999);
console.log(jay);
console.log(jay instanceof Person); // True
console.log(jay instanceof Object); // True

// prototypes

// creating methods for Person

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

jay.calcAge(); // 24
console.log(Person.prototype); // contains methods & properties
console.log(jay.__proto__); // contains methods & properties
console.log(jay.__proto__ === Person.prototype); // true

////////////////////////////////////////////////////////

Person.prototype.species = "Homo Sapiens";
console.log(jay.species);
console.log(jay.hasOwnProperty("firstName")); // true
console.log(jay.hasOwnProperty("species")); // false

////////////////////////////////////////////////////////

// Object.protoype (top of prototype chain)
console.log(jay.__proto__); // Person methods and properties
console.log(jay.__proto__.__proto__); // Object
console.log(jay.__proto__.__proto__.__proto__); // null

////////////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5, 7, 7, 7, 7, 10];
Array.prototype.unique = function () {
  return [...new Set(this)];
};

const newArr = arr.unique();
console.log(newArr);
