var errorMessage = "";
var resultMessage = "";

function addNum() {

    var firstNumber = parseFloat(document.getElementById('txtNum1').value);
    var secondNumber = parseFloat(document.getElementById('txtNum2').value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
       errorMessage = "<strong>Numbers fields cannot be left blank. Also, you cannot enter letters, only numbers. <br />Please try again!</strong>";
        ShowResults.innerHTML = errorMessage;
    }
    else {
        var result = firstNumber + secondNumber;
        if (!isNaN(result)) {
            resultMessage = "<strong>Your answer is:</strong> " + result;
            ShowResults.innerHTML = resultMessage;
        }
    }
}

function subtractNum() {

    var firstNumber = parseFloat(document.getElementById('txtNum1').value);
    var secondNumber = parseFloat(document.getElementById('txtNum2').value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        errorMessage = "<strong>Numbers fields cannot be left blank. Also, you cannot enter letters, only numbers. <br />Please try again!</strong>";
        ShowResults.innerHTML = errorMessage;
    }
    else {
        var result = firstNumber - secondNumber;
        if (!isNaN(result)) {
            resultMessage = "<strong>Your answer is:</strong> " + result;
            ShowResults.innerHTML = resultMessage;
        }
    }
}

function multiplyNum() {

    var firstNumber = parseFloat(document.getElementById('txtNum1').value);
    var secondNumber = parseFloat(document.getElementById('txtNum2').value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        errorMessage = "<strong>Numbers fields cannot be left blank. Also, you cannot enter letters, only numbers. <br />Please try again!</strong>";
        ShowResults.innerHTML = errorMessage;
    }
    else {
        var result = firstNumber * secondNumber;
        if (!isNaN(result)) {
            resultMessage = "<strong>Your answer is:</strong> " + result;
            ShowResults.innerHTML = resultMessage;
        }
    }
}

function divideNum() {

    var firstNumber = parseFloat(document.getElementById('txtNum1').value);
    var secondNumber = parseFloat(document.getElementById('txtNum2').value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        errorMessage = "<strong>Numbers fields cannot be left blank. Also, you cannot enter letters, only numbers. <br />Please try again!</strong>";
        ShowResults.innerHTML = errorMessage;
    }
    else {
        var result = firstNumber / secondNumber;
        if (!isNaN(result)) {
            resultMessage = "<strong>Your answer is:</strong> " + result;
            ShowResults.innerHTML = resultMessage;
        }
    }
}

function startOver() {
    var firstNumber = document.getElementById("txtNum1").value = "";
    var firstNumber = document.getElementById("txtNum2").value = "";
    document.getElementById('ShowResults').innerHTML = '';
}