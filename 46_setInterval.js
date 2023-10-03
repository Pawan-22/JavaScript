setInterval(function () {
  const now = new Date();
  //   const options = {
  //     hour: "numeric",
  //     minute: "numeric",
  //     second: "numeric",
  //   };
  //   const formatTime = new Intl.DateTimeFormat("eu-IN", options).format(now);
  //   console.log(formatTime);
  console.log(now.toLocaleTimeString());
}, 1000);

// let count = 0;

// setInterval(function () {
//   count++;

//   console.log(count);
// }, 1000);
