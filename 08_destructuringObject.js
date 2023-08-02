"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },

  openingHours: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { name, categories, openingHours } = restaurant; // order dont matter because its an object
console.log(name, categories, openingHours);

// Setting desired variable names
const {
  name: restaurantName,
  categories: tags,
  openingHours: time,
} = restaurant;
console.log(restaurantName, tags, time);

// setting default values in case property dont exist.

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 101;
let b = 999;
const obj = {
  a: 25,
  b: 22,
  c: 10,
};
({ a, b } = obj);
console.log(a, b); // 25, 22

// Nested Objects
const {
  fri: { open: opening, close: closing },
} = openingHours;
console.log(opening, closing);

restaurant.orderDelivery({
  time: "10:00",
  address: "chowk",
  mainIndex: 1,
  starterIndex: 2,
});
