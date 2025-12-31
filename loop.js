let i = 5;
for (; i < 15; i++) {
  console.log("i in for loop is: ", i);
}
let a = 1;
while (a < 10 ) {
    console.log("a in while loop is :", a);
    a++;
}

let b = 1;

do {
    console.log("Frist run", b);
    b++;
} while (b < 10) ;

const  cars = ['BMW ', 'Audi ', 'Ford ', 'Mecerdes '];
let length = cars.length;

let text = "";
for (let i = 0; i < length; i++) {
    text += cars[i] 
    console.log("car in for loop is: ", text);
}

const car = ['BMW ', 'Audi ', 'Ford ', 'Mecerdes '];
let c = 0;
let text1 = "";

while (car[c]) {
  text1 += car[c];
  console.log("car in while loop is:", text1);
  c++;
}
let text2 = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop1; }
    text += i;
    console.log("Value of i is: ", text2);
   }
}

outerLoop:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; 
    }
    console.log(i, j);
  }
}



