function Calculator() {
  this.sum = function (a, b) {
    return a + b;
  };

  this.subtraction = function (a, b) {
    return a - b;
  };

  this.multiplication = function (a, b) {
    return a * b;
  };

  this.division = function (a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    } else {
      return a / b;
    }
  };
}

const calculator = new Calculator();

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");
const result = document.getElementById("result");

addBtn.addEventListener("click", function () {
  const res = calculator.sum(Number(num1.value), Number(num2.value));
  result.textContent = res;
});

subtractBtn.addEventListener("click", function () {
  const res = calculator.subtraction(Number(num1.value), Number(num2.value));
  result.textContent = res;
});

multiplyBtn.addEventListener("click", function () {
  const res = calculator.multiplication(Number(num1.value), Number(num2.value));
  result.textContent = res;
});

divideBtn.addEventListener("click", function () {
  const res = calculator.division(Number(num1.value), Number(num2.value));
  result.textContent = res;
});
