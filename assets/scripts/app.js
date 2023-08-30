//order matters for declaration, but not for the functions. therefore you can place your function to the top or to the bottom upon your style.
const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    const enteredNum = getInput();
    const calcDescription = `${currentResult} + ${enteredNum}`;
    currentResult = currentResult + enteredNum;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);

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
    return parseInt(usrInput.value);
}
