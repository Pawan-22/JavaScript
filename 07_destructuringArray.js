"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring Array

const arr = [76, 8, 54];
const [a, b, c] = arr;
console.log(a, b, c);

const [first, second] = restaurant.categories;
console.log(first, second);

// skipping the 2nd element by creating a hole.
let [firstC, , secondC] = restaurant.categories; // Order matters because its an array
console.log(firstC, secondC);

//swapping two values using destructuring
[firstC, secondC] = [secondC, firstC];
console.log(firstC, secondC);

// Return 2 values from a function
const [starter, main] = restaurant.order(0, 2);
console.log(starter, main);

// Destructuring inside Destructuring.
const nested = [1, 2, 3, [25, 26, 27]];

const [n0, , , [n3, n4]] = nested;
console.log(n0, n3, n4);

// Setting Default values to variables.

const age = [25, 22];

const [age0 = 1, age1 = 1, age2 = 1] = age;
console.log(age0, age1, age2); // 25, 22, 1
