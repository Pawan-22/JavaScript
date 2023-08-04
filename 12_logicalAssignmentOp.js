// Logical Assignment Operators (ES2021)

const res1 = {
  name: "Cou",
  //numGuests: 20,
  numGuests: 0,
};

const res2 = {
  name: "La Pizzeria",
  owner: "Pawan",
};

// OR Assignment Operator
// res1.numGuests = res1.numGuests || 10;
// res2.numGuests = res2.numGuests || 30;
res1.numGuests ||= 10;
res2.numGuests ||= 30;

// Nullish Assignment Operator
res1.numGuests ??= 10;
res2.numGuests ??= 10;

console.log(res1);
console.log(res2);

// AND Assignment Operator
res1.owner &&= "Anonymous";
res2.owner &&= "Anonymous";
console.log(res1);
console.log(res2);
