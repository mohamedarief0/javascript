// let myFriendName = [
//   { name1: "Abd", name2: "Benstock", name3: "Chaypak", name4: "Dhoni" },
// ];
let myFriendName = ["Abd", "Benstock", "Chaypak", "Dhoni"];
let headiging = document.getElementById("headingId");
let currentIndex = 0;
console.log(headiging);
function nameChange() {
  headiging.innerHTML = myFriendName[currentIndex];
  currentIndex = (currentIndex + 1) % myFriendName.length;
  console.log(myFriendName);
  console.log(myFriendName[0].name1);
  console.log(myFriendName[0].name2);
}
headiging.addEventListener("click", nameChange);
// let a= "4"
let a = "4";
let b = 4;
console.log(a + b);
console.log(4 + '2' );
console.log("4" + 4);
console.log("Arief" + 4);
console.log("4" * 4);
console.log("Arief" * 4);
console.log("5" - 12);
console.log("Arief" - 4);
console.log("2" % 3);
console.log("Arief" / 4);
console.log(1 < 2 < 3);
console.log(3 < 2 < 1);
console.log(3 > 2 > 1);
console.log(1 > 2 > 3);