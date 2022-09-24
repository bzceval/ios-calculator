// console.log("******app.js bağlandı****")

// Selectors
let firstResult = document.querySelector("#firstResult");
let secondResult = document.querySelector("#secondResult");
let numbers = document.querySelector(".numbers");

// Values From the User
let number1 = "";
let number2 = "";
let operator = "";

//Event Control
numbers.addEventListener("click", (event) => {
  // console.log(event.target)
  if (event.target.className == "number") {
    console.log("number");
  } else if (event.target.className == "oparator") {
    console.log("oparator");
  } else if (event.target.classList.contains("equal")) {
    console.log("equal");
  } else if (event.target.classList.contains("percent")) {
    console.log("percent");
  } else if (event.target.classList.contains("ac-oparator")) {
    console.log("ac-oparator");
  } else if (event.target.classList.contains("minus-plus")) {
    console.log("minus-plus");
  }
});

// Calculate Function
function calculate(n1, operator, n2) {
  if (operator === "+") return n1 + n2;
  else if (opartor === "-") return n1 - n2;
  else if (oparator === "x") return n1 * n2;
  else if (oparator === "/") {
    if (!n2) {
      return "Error";
    } else {
      return n1 / n2;
    }
  }
}
// Reset Function
function reset() {
  let number1 = "";
  let number2 = "";
  let operator = "";
  firstResult.innerText = "";
  secondResult.innerText = "";
}
