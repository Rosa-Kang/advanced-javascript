const defaultResult = 0;
let currentResult = defaultResult;
let inputNum = getInput();

console.log(operator, inputNum);
let calculationLogic = `${defaultResult} + ${currentResult}`;

outputResult(currentResult, calculationLogic);

function add(a, b) {
    const result = a + b;
    return result;
}

function divide(a, b) {
    const result = a / b;
    return result;
}

function subtract(a, b) {
    const result = a - b;
    return result;
}

function multiply(a, b) {
    const result = a * b;
    return result;
}

function getInput(e) {
    e.preventDefault();
    let value = e.target.value();
    return value;
}
