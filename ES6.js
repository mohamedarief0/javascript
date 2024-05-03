// 1 Arrow function
// Normal function
function add(a, b) {
  return a + b;
}
let a = 12;
let b = 12;
add(a, b);

// Arrow function
// ()=>{} syntex
//both are correct we can also use let , var
// const add = (a, b) => a + b;
// const add = (a, b) => {
//   a + b;
// };

// 2 Let and const
// It is mainly for Block scope
let name = "name";
const PI = 3.14;

// 3 Destructuring Assignment
// Array
let [c,d] = [1,2]
// object
let {x,y} = {x:"Str",y:"122"}
