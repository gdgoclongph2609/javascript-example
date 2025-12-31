const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter time: ", function (time) {
  console.log("Time:", time);
  rl.close();
  let greeting;
  time = Number(time);


if (time < 10) {
  greeting = "Good morning";
  console.log(greeting);
} else if (time < 20) {
  greeting = "Good day";
  console.log(greeting);
} else {
  greeting = "Good evening";
  console.log(greeting);
}
});