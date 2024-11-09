let display = document.getElementById("display");
let currentOperation = "";

function appendNumber(number) {
    if (currentOperation === "") {
        currentOperation += number;
    } else {
        currentOperation += number;
    }
    display.value = currentOperation;
}

function appendOperator(operator) {
    currentOperation += operator;
    display.value = currentOperation;
}

function calculate() {
    try {
        const result = eval(currentOperation);
        display.value = result;
        currentOperation = result.toString();
    } catch (error) {
        alert("Ошибка вычисления!");
        clearDisplay();
    }
}

function clearDisplay() {
    display.value = "";
    currentOperation = "";
}