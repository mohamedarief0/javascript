// Reusable function
function greetPerson(name) {
  // 3 Parameters
  console.log("Hello" + name); // 1 defenition the function syntex
}
greetPerson("Arief"); // 2 invocation

// calling the function inside value we are not giving
function num(value) {
  let newvalue = 5;
  return newvalue;
}
console.log(typeof num);

// find string and number types
let number = 2;
let string = "arief";
let empty = " ";

console.log(typeof empty);
console.log(string * string * string);
console.log(string * string * number);
console.log(number * string);
console.log(number / string);
console.log(number + string);

class MyClass {} // class in JS

let btn1 = document.querySelector("mybtn");
let btn = document.getElementById("mybtn");
let btnclass = document.getElementsByClassName("mybtn");

let headClass1 = document.querySelector("heads");
let headClass = document.getElementsByClassName("heads");

console.log(typeof btn1);
console.log(btn1);

console.log(typeof btn);
console.log(typeof btnclass);

console.log(typeof headClass);
console.log(headClass1);

// document.getElementById("mybtn").add
console.log(num());

button = document.getElementById("mybtn");
let myPromise = new Promise((res, rej) => {
  // Promise constructor function
  button.addEventListener("click", () => {
    console.log("Promise resolved");
    res(); // Resolve the Promise when the button is clicked
  });
});

// myPromise.then(() => {
//   console.log("Promise resolved");
// });

// // promise and time
// function myAsyncFunction() {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           console.log("Timeout completed");
//           resolve("Promise resolved");
//       }, 2000); // Timeout set to 2 seconds or 2000 ms
//   });
// }
// console.log("Before calling myAsyncFunction");

// myAsyncFunction().then((result) => {
//   console.log("Promise A resolved:", result);
// });
// console.log("After calling myAsyncFunction");

// return function
let a = 8;
let b = 8;
console.log(numbers(a, b));

function numbers(n, n1) {
  sum = n + n1;
  console.log(typeof a);
  return sum;
}

let c = 8;
let d = 18;
console.log(numbers(c, d));

// types of scope

// 1 Global scope
let globalVar = "calling global scope";
function globalFunctionCalling() {
  console.log(globalVar); // accessible here
}

// 2 Function scope
function functionScopeExample() {
  let localVar = "I'm functional scope";
  console.log(localVar); // accessible here
}
// console.log(LocalVar);// Not accessible here ReferenceError: localVar is not defiend

// 3 Blockscope
// Variables declared using let or const inside a block (e.g., within curly braces {}) have block scope
// const a = rue
if (a > 1) {
  let blockVar = "I'm blockscope";
  console.log(blockVar); // accessible here
}
console.log(blockVar); // Error: blockVar is not defiend

// 4 Lexical scope (closer)

function outerFunction() {
  let outerVar = "I'm outerVar";
  function innerFunction() {
    console.log(outerVar); // Accessible due to closer
  }
  innerFunction();
}
outerFunction();
