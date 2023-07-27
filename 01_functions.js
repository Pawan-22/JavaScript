"use strict";

function fruitsName(Mangoes, Bananas) {
  console.log(Mangoes, Bananas);
  const juice = `Juice with ${Mangoes} Mangoes and ${Bananas} Bananas`;
  return juice;
}
const juiceInfo = fruitsName(10, 20);
console.log(juiceInfo);

function average(x, y, z) {
  const result = (x + y + z) / 3;
  return result;
}

console.log(average(10, 20, 30));

function myFunction() {
  console.log("Yellowwww");
}

let test = myFunction();
console.log(test); // will return undefined because myFunction is not returning anything.

////////////////////////////////////////////////////

// function declaration
function ageCalculator(birthYear, currentYear) {
  return currentYear - birthYear;
}
let age = ageCalculator(1997, 2023);
console.log(age);

// function expression / Anonymous function
const ageCalculator2 = function (birthYear, currentYear) {
  return currentYear - birthYear;
};

let age2 = ageCalculator2(1997, 2023);
console.log(age2);
