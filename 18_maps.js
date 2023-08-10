const rest = new Map();
rest.set("name", "Classico");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
console.log(rest.set(3, "India"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, " We are Open")
  .set(false, "We are Close");
console.log(rest);

console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);

// rest.clear();
// console.log(rest);

// array as a key

rest.set([1, 2], "Array");
console.log(rest);

// console.log(rest.get([1, 2])); // undefined because both are diff objects in heap

const arr = [3, 4];
rest.set(arr, "Worked");
console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);

// Maps Iteration

const question = new Map([
  ["question", "what is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again"],
]);
console.log(question);

// Convert Object to map
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
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
};
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get("question"));
for (let [key, value] of question) {
  if (typeof key === "number") console.log(key, value);
}

const answer = 2;
console.log(question.get(question.get("correct") === answer));

// Convert Map to an Array
const arr1 = [...question];
console.log(arr1);
//console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
