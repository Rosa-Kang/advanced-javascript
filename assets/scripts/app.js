//order matters for declaration, but not for the functions. therefore you can place your function to the top or to the bottom upon your style.

const defaultResult = 0;
let currentResult = defaultResult;
let inputNum = getInput();

console.log(operator, inputNum);
let calculationLogic = `${defaultResult} + ${currentResult}`;

outputResult(currentResult, calculationLogic);

function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function getInput(e) {
    e.preventDefault();
    let value = e.target.value();
    return value;
}
