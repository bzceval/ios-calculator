// Selectors
let firstResult = document.querySelector("#firstResult")
let secondResult = document.querySelector("#secondResult")
let numbers = document.querySelector(".number")

// Values From the User
let number1 = "";
let number2 = "";
let operator = "";

// Reset Function
function reset() {
    let number1 = "";
    let number2 = "";
    let operator = "";
    firstResult.innerText = "";
    secondResult.innerText = ""; 
}
