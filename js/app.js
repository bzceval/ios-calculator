const container = document.querySelector(".container");
let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");

let number1 = "";
let number2 = "";
let operator = "";

container.addEventListener("click", (event) => {
  //number click event  
  if (event.target.className === "number") {
    // console.log(e.target)
    number2 += event.target.innerText;
    result1.innerText = number2;
  }
  // ac click event 
  else if (event.target.classList.contains("operator-ac")) {
    reset();
  } 
  // operator click event 
  else if (event.target.classList.contains("operator")) {
    if (number1) {
      if (!number2) {
        alert("Enter a number!");
      } else {
        number1 = calculate(Number(number1), operator, Number(number2));
        // if (String(number1).slice(String(number1).indexOf(".")).length > 6) {
        //   number1 = number1.toFixed(6);
        // }
        operator = event.target.innerText;
        result2.innerText = `${number1} ${operator}`;
        result1.innerText = "";
        number2 = "";
      }
    } else {
      number2 = result1.innerText;
      number1 = number2;
      number2 = "";
      operator = event.target.innerText;
      result2.innerText = `${number1} ${operator}`;
      result1.innerText = "";
    }
  } 
  // equal click event 
  else if (event.target.classList.contains("equal")) {
    number2 = calculate(Number(number1), operator, Number(number2));
    if (String(number2).length > 6) {
      number2 = number2.toFixed(6);
    }
    result1.innerText = number2;
    result2.innerText = "";
    number1 = "";
    number2 = "";
  } 
  // minus-plus click event
  else if (event.target.id === "minus-plus") {
    number2 *= -1;
    result1.innerText = number2;
  }
  // percent click event 
  else if (event.target.id === "percent") {
    number2 /= 100;
    result1.innerText = number2;
  }
});

function calculate(n1, oper, n2) {
  if (oper === "+") return n1 + n2;
  else if (oper === "-") return n1 - n2;
  else if (oper === "x") return n1 * n2;
  else if (oper === "÷") {
    if (!n2) {
      return "Error";
    } else {
      return n1 / n2;
    }
  }
}

function reset() {
  number1 = "";
  number2 = "";
  operator = "";
  result1.innerText = "";
  result2.innerText = "";
}