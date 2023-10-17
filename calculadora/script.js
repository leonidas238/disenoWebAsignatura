var resultField = document.getElementById('result');
var operand1 = null;
var operand2 = null;
var operator = null;

function appendNumber(number) {
    resultField.value = resultField.value + number;
}

function setOperation(op) {
    if (operator !== null) {
        calculate();
    }
    operand1 = Number(resultField.value);
    operator = op;
    resultField.value = "";
}

function calculate() {
    operand2 = Number(resultField.value);
    switch (operator) {
        case '+':
            resultField.value = operand1 + operand2;
            break;
        case '-':
            resultField.value = operand1 - operand2;
            break;
        case '*':
            resultField.value = operand1 * operand2;
            break;
        case '/':
            if (operand2 !== 0) {
                resultField.value = operand1 / operand2;
            } else {
                resultField.value = "Error";
            }
            break;
        default:
            return;
    }
    operator = null;
}

function clearInput() {
    resultField.value = "";
    operator = null;
}
