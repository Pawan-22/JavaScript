setTimeout(function () {
  console.log("Finished");
}, 10000);

const ings = ["olives", "tomato"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Your Pizza with ${ing1} & ${ing2}`),
  5000,
  // 'olives', // args
  // 'tomato' // args
  ...ings
);
console.log("waiting");

// Deletes the timer
if (ings.includes("tomato")) clearTimeout(pizzaTimer);
