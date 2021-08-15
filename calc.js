let num1String = "";
let num2String = "";
let allButtons = document.querySelectorAll("button");
let operators = document.querySelectorAll("button.operators");
const nums = document.querySelectorAll("button.numbers");

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
        console.log(checkOperator);
      } else {
        checkOperator = false;
        console.log(checkOperator);
      }
    })();

    if (checkOperator) {
      for (let num of nums) {
        num.addEventListener("click", function () {
          let num2 = document.querySelectorAll("input")[2];
          num2String += parseInt(num.innerText);
          num2.value = parseInt(num2String);
          console.log(num2.value);
          console.log('num2')
        });
      }
    } else if(checkOperator === false) {
      for (let num of nums) {
        num.addEventListener("click", function () {
          let num1 = document.querySelectorAll("input")[0];
          num1String += parseInt(num.innerText);
          num1.value = parseInt(num1String);
          console.log(num1.value);
          console.log("ok");
        });
      }
    }
  });
}

const buttonEqual = document.querySelectorAll("button")[14];
const buttonReset = document.querySelectorAll("button")[15];
buttonEqual.addEventListener("click", calculate);

var result = "";
function calculate() {
  let num1r = document.querySelectorAll("input")[0].value;
  let operator = document.querySelectorAll("input")[1];
  let num2r = document.querySelectorAll("input")[2].value;
  let resultBox = document.querySelectorAll("input")[3];
  let num1 = parseInt(num1r);
  let num2 = parseInt(num2r);
  console.log(num1, num2, operator.value, num1r);
  if (operator.value == "+") {
    result = num1 + num2;
    resultBox.value = result;
  } else if (operator.value == "-") {
    result = num1 - num2;
    resultBox.value = result;
  } else if (operator.value == "*") {
    result = num1 * num2;
    resultBox.value = result;
  } else if (operator.value == "/") {
    result = num1 / num2;
    resultBox.value = result;
  } else {
    result = "syntax error";
    alert("wrong input");
  }
}

// const button1 = document.querySelectorAll("button")[0];
// const button2 = document.querySelectorAll("button")[1];
// const button3 = document.querySelectorAll("button")[2];
// const button4 = document.querySelectorAll("button")[3];
// const button5 = document.querySelectorAll("button")[4];
// const button6 = document.querySelectorAll("button")[5];
// const button7 = document.querySelectorAll("button")[6];
// const button8 = document.querySelectorAll("button")[7];
// const button9 = document.querySelectorAll("button")[8];
// const button0 = document.querySelectorAll("button")[9];
// const buttonM = document.querySelectorAll("button")[10];
// const buttonD = document.querySelectorAll("button")[11];
// const buttonS = document.querySelectorAll("button")[12];
// const buttonA = document.querySelectorAll("button")[13];

//   if (
//     button.value == "*" ||
//     button.value == "/" ||
//     button.value == "-" ||
//     button.value == "+"
//   ) {
//     for (let num of nums) {
//       num.classList.add("text-danger");
//       num.addEventListener("click", function () {
//         let num1 = document.querySelectorAll("input")[0];
//         num1String += parseInt(num.innerText);
//         num1.value = parseInt(num1String);
//         console.log(num1.value);
//       });
//     }
//   }
