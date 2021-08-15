let firstNumString = "";
let secondNumString = "";
let allButtons = document.querySelectorAll("button");
// let operators = document.querySelectorAll("button.operators");
const numberButtons = document.querySelectorAll("button.numbers");

for (let button of allButtons) {
  button.addEventListener("click", function () {
    var checkOperator;
    
    (function isOperator() {
      if (
        button.innerText == "/" ||
        button.innerText == "*" ||
        button.innerText == "-" ||
        button.innerText == "+"
      ) {
        checkOperator = true;
        // console.log(checkOperator);
      } else {
        checkOperator = false;
        console.log(checkOperator);
      }
    })();

    if (checkOperator === false) {
      for (let numberButton of numberButtons) {
        numberButton.addEventListener("click", function () {
          let firstNum = document.querySelectorAll("input")[0];
          firstNumString += parseInt(numberButton.innerText);
          firstNum.value = parseInt(firstNumString);
          // console.log(firstNum.value);
        });
      }
    } else {
      for (let numberButton of numberButtons) {
        numberButton.addEventListener("click", function () {
          let secondNum = document.querySelectorAll("input")[2];
          secondNumString += parseInt(numberButton.innerText);
          secondNum.value = parseInt(secondNumString);
          // console.log(secondNum.value);
        });
      }
    }
  });
}

//*********************** don't touch ************************************/
//*************************it is working */
// const buttonEqual = document.querySelectorAll("button")[14];
// const buttonReset = document.querySelectorAll("button")[15];
// buttonEqual.addEventListener("click", calculate);

// var result = "";
// function calculate() {
//   let num1r = document.querySelectorAll("input")[0].value;
//   let operator = document.querySelectorAll("input")[1];
//   let num2r = document.querySelectorAll("input")[2].value;
//   let resultBox = document.querySelectorAll("input")[3];
//   let num1 = parseInt(num1r);
//   let secondNum = parseInt(num2r);

//   console.log(num1, secondNum, operator.value, num1r);
//   if (operator.value == "+") {
//     result = num1 + secondNum;
//     resultBox.value = result;
//   } else if (operator.value == "-") {
//     result = num1 - secondNum;
//     resultBox.value = result;
//   } else if (operator.value == "*") {
//     result = num1 * secondNum;
//     resultBox.value = result;
//   } else if (operator.value == "/") {
//     result = num1 / secondNum;
//     resultBox.value = result;
//   } else {
//     result = "syntax error";
//     alert("wrong input");
//   }
// }
