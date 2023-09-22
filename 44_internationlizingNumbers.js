const num = 3215654.45;
const options = {
  style: "currency", // percent, unit
  unit: "mile-per-hour", // celsius
  currency: "INR",
  // useGrouping: false,
};
console.log("US", new Intl.NumberFormat("en-US", options).format(num));
console.log("IN", new Intl.NumberFormat("en-IN", options).format(num));

const now = new Date();
console.log(now);
const options1 = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric", // long, 2-digit
  year: "numeric", // 2-digit
  //weekday: 'long', // short, narrow
};

const formattedDate = new Intl.DateTimeFormat("en-IN", options1).format(now);
console.log(formattedDate);
