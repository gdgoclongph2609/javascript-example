let x = false;
let y = x ||= 10;
console.log("y:", y);

let a = true;
let b = x &&= 10;
console.log("b:", b);

let d;
d ??= 10;
console.log("d:", d);

let text = "12345";

let min = Math.min(...text);
let max = Math.max(...text);
console.log("Min:", min);
console.log("Max:", max);
