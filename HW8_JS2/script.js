function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Error: Division by zero is not allowed!");
        return null;
    }
    return a / b;
}

function calculate() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    var operator = document.getElementById("operator").value;
    var resultDiv = document.getElementById("result");
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        resultDiv.textContent = "";
        return;
    }
    
    var result;
    
    if (operator === "+") {
        result = add(num1, num2);
    } else if (operator === "-") {
        result = subtract(num1, num2);
    } else if (operator === "*") {
        result = multiply(num1, num2);
    } else if (operator === "/") {
        result = divide(num1, num2);
        if (result === null) {
            resultDiv.textContent = "";
            return;
        }
    }
    
    result = result.toFixed(2);
    resultDiv.textContent = "Result = " + result;
}

var calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", calculate);