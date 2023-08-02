"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
};

// Spread Operator on Arrya
const arr = [12, 23, 34];
const newArr = [0, 1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Burgers"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Spread operator on strings
const fullName = "Pawan Patel";
const nameArr = [...fullName];
console.log(nameArr);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// restaurant.orderPasta(...ingredients);

// Spread Operator on Objects
const newRestaurant = { foundedIn: 2022, ...restaurant, founder: "Pawan" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "InGreen";
console.log(restaurantCopy.name);
console.log(restaurant.name);
