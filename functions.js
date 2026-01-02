// ex 1
function sayHello (username) {
    return`Hello ${username}`;

}

console.log(sayHello("Long"))

// ex2
function square(n) {
    return Math.pow(n, 2);
}
console.log(square(4));

//ex3
function isEven(n) {
    return n % 2 === 0 ? true : false;


}
console.log(isEven(5))

//ex6
function sum(a, b) {
    let result = a + b;
    return result;
}

console.log(sum(2, 3));


//ex7
function counter() {
  let count = 0;      

  return function () { 
    count++;           
    return count;      
  };
}

const c = counter();

console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3

// ex 9
function createLogger(prefix) {
  return function (message) {
    console.log(prefix + ": " + message);
  };
}

const info = createLogger("INFO");
const error = createLogger("ERROR");

info("Server started");
error("Server crashed");

