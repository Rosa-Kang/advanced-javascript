// Order matters for declaration, but not for the functions.
// Therefore you can place your function to the top or to the bottom upon your style.

const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(usrInput.value);
}


function calculator(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;

    if (calculationType === 'add') {
        currentResult += enteredNumber;
        mathOperator = '+'; 
    } else if(calculationType === 'subtract') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if(calculationType === 'multiply') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else (calculationType === 'divide') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber)
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.multiplyEventListener('click', multiply);
divideBtn.divideEventListener('click', divide);

function add() {
    calculationType('ADD');
}
function subtract() {
    calculationType('SUBTRACT');
}
function multiply() {
    calculationType('MULTIPLY');
}
function divide() {
    calculationType('DIVIDE');
}