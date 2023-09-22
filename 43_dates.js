console.log(new Date("December 22 1997 20:54:10"));

console.log(new Date("December 31, 2025"));

console.log(new Date(2025, 11, 20, 14, 10)); // 2nd param which is month is zero based!

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // (days, hours, mins, secs, milli)

const cur = new Date();
console.log(cur);
console.log(cur.getDate());
console.log(cur.getDay());
console.log(cur.getFullYear());
console.log(cur.getHours());
console.log(cur.getMilliseconds());
console.log(cur.getMinutes());
console.log(cur.getMonth()); // index based

console.log(cur.toISOString());
console.log(Date.now());
console.log(cur.getTime()); // timestamp. returns no. of ms since Jan 1, 1970

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (24 * 60 * 60 * 1000);

const days1 = calcDaysPassed(new Date(2037, 3, 1), new Date(2037, 3, 16));
console.log(days1);
