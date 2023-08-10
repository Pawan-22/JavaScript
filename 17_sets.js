const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);

const pawan = new Set("Pawan");
console.log(pawan);

console.log(orderSet.size);
console.log(orderSet.has("Pizza")); // true
console.log(orderSet.has("Cake")); // false
orderSet.add("Garlic Bread");
orderSet.delete("Pasta");
// orderSet.clear(); // delete all elements at once.
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const newStaff = [...new Set(staff)];
console.log(newStaff);
