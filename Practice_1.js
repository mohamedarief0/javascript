//forEach
let arraysOfFruits = ["Apple", "Banana", "cherry", "Dragon fruit"];
arraysOfFruits.push("mango")

arrayNmaes = document.getElementById("arrayName");
arraysOfFruits.forEach((fruit) => {
    console.log(fruit.toUpperCase());
    arrayNmaes.innerText = fruit.toString()
});

let arraysOfNumbers = [1, 2, 4, 5, 6, 7, 8];
let n = 0;
number = document.getElementById("number");
arraysOfNumbers.forEach((item) => {
  n += item;
  number.innerText = n;
  console.log(n);
});

//reduce for an arry
