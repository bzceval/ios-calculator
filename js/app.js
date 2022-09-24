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
  //number event
  if (event.target.className == "number") {
    // console.log("number");
    number2 += event.target.innerText;
    secondResult.innerText = number2;
  }
  // opator event
  else if (event.target.className == "oparator") {
    // console.log("oparator");
    if (number1) {
      if (!number2) {
        alert("Enter a number!");
      } else {
        number1 = calculate(Number(number1), operator, Number(number2));
        if (String(number1).slice(String(number1).indexOf(".")).length > 6) {
          number1 = number1.toFixed(6);
        }
        operator = event.target.innerText;
        secondResult.innerText = number1 + " " + operator;
        firstResult.innerText = "";
        number2 = "";
      }
    } else {
      number2 = firstResult.innerText;
      number1 = number2;
      number2 = "";
      operator = event.target.innerText;
      secondResult.innerText = number1 + " " + operator;
      firstResult.innerText = "";
    }
  }
  // equal event
  else if (event.target.classList.contains("equal")) {
    console.log("equal");
  }
  // percent event
  else if (event.target.classList.contains("percent")) {
    // console.log("percent");
    number2 /= 100;
    secondResult.innerHTML = number2;
  }
  // ac-calcutor event
  else if (event.target.classList.contains("ac-oparator")) {
    // console.log("ac-oparator");
    reset();
  }
  // minus-plus event
  else if (event.target.classList.contains("minus-plus")) {
    // console.log("minus-plus");
    number2 *= -1;
    firstResult.innerText = number2;
  }
});

// Reset Function
function reset() {
  let number1 = "";
  let number2 = "";
  let operator = "";
  firstResult.innerText = "";
  secondResult.innerText = "";
}

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
