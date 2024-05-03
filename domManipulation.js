// document object model (dom)
// let div = document.getElementById("myDiv");
// let div = document.querySelector("#myDiv");

// let div = document.getElementsByClassName("myDiv");
let div = document.querySelector("#myDiv");
console.log(div);

// addEventlistner()
div.addEventListener("click", () => {
  div.innerHTML = "AddEventlister is called";
  // div.innerHTML= 23423
});

//apendchild()
let parentElement = document.getElementById("parent");
let newHeadingOneElement = document.createElement("h1"); // creating vrituallydom Heading
let newParaElement = document.createElement("p"); // creating vrituallydom para
let newAnchorElement = document.createElement("a"); // creating vrituallydom anchor

//heading tag
newHeadingOneElement.innerText = "Mohamed";
//para
newParaElement.innerHTML = "Arief";
//anchor
newAnchorElement.innerHTML = "Arief";
newAnchorElement.setAttribute("href", "https://google.com"); // setting attributes
newAnchorElement.setAttribute("target", "top");
newAnchorElement.setAttribute("id", "anchorTag");
newAnchorElement.setAttribute("class", "anchorTag");
// externaly adding two or more class names
newAnchorElement.classList.add("myAnchor_tag");
newAnchorElement.classList.add("Active");

parentElement.append(newHeadingOneElement);
parentElement.appendChild(newParaElement);
parentElement.appendChild(newAnchorElement);

                    // removeChild()
let removeChildNode = document.getElementById("removeChildNode");
parentElement.removeChild(removeChildNode)