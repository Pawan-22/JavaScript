"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// Short Circuiting (&& and ||)

console.log(3 || "Pawan"); // 3
console.log("" || "Pawan"); // Pawan
console.log(undefined || null); // null
console.log(undefined || null || 0 || "Hey" || "" || false || 25); // Hey

const guests = restaurant.guestNum || 10;
console.log(guests); // 10

console.log(0 && "Pawan"); // 0
console.log(25 && "Pawan"); // Pawan
console.log("Hi" && "25" && 0 && "There"); // 0
console.log(5 < 6 < 10); // true ==> 5<6? False means 0. 0<10? True.

restaurant.orderPizza && restaurant.orderPizza("Panner", "Tomato");

// Nullish Coalescing Operator(??)
restaurant.numGuests = 0;

const guests1 = restaurant.numGuests || 10;
console.log(guests1); // 10

// But what if we want guests1 = 0?
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0 ==> Nullish values are NULL & UNDEFINED. (NOT 0 or '')
