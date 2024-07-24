let array = ["Arief","Mohamed","Akbar"];
// Stacks in js
// push(), pop(), isEmpty, isFull, top/peek
array.push("Keven");
array.push(25);
console.log(array);
console.log(array.pop())
console.log(array.pop())
console.log(array)
console.log(array.lastIndexOf())

let array1 = ["Arief","Mohamed","Akbar"];
console.log(array1.slice(0,2))
console.log(array1.includes("Arief"))
console.log(array1.includes("ohamed"))

//set it avoid repeted content take one
let numOfArray = ["1",2,3,567,2,34,3,"1","arief","arief"]
let set1 = new Set(numOfArray);
console.log(numOfArray.length);
console.log(set1);
let a =[]
a.push(set1)
console.log(a);
// it contains 'f', 'o', 'd'
var set2 = new Set("fooooooood");
console.log(set2);