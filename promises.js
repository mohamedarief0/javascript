// promis is an Object which has  an asyncrones
//
let btn = document.getElementById("mybtn");

function workingDay() {
    return new Promise((resolve, reject) => {
        // Inside the Promise constructor, you need to define the asynchronous operation
        // Here, I'm using the click event of the button as the trigger for resolving the Promise
        btn.addEventListener("click", () => {
            console.log("Working...");
            // Resolve the Promise when the button is clicked
            resolve("Work in progress");
            console.log("Work in progress");
        });

        // Alternatively, you can use a timeout to simulate an asynchronous operation
        setTimeout(() => {
            resolve("settime Out");
        }, 2000);
        
        // If there's an error condition, you can reject the Promise instead
        // reject("Error: Something went wrong");
    });
}

// Call the function and handle the Promise
workingDay().then((result) => {
    console.log(result); // Output: "Work in progress"
}).catch((error) => {
    console.error(error); // Output: "Error: Something went wrong"
});


// workingDay(2500)
//   .then((resolvedvalue) => {
//     console.log(resolvedvalue);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

  
