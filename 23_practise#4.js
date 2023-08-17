const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const newFlight = flights.split("+");
console.log(newFlight);

for (const i of newFlight) {
  const [status, src, dest, time] = i.split(";");
  const output = `${status.replaceAll("_", " ")} from ${src
    .slice(0, 3)
    .toUpperCase()} to ${dest.slice(0, 3).toUpperCase()} (${time.replace(
    ":",
    "h"
  )})`.padStart(42);
  console.log(output);
  //console.log(status, src, dest, time);
}
