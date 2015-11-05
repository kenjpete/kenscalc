var errorMessage = "";
var resultMessage = "";

function addNum() {

    var firstNumber = parseFloat(document.getElementById('txtNum1').value);
    var secondNumber = parseFloat(document.getElementById('txtNum2').value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        errorMessage = "<strong>Numbers fields cannot be left blank. <br />Also, you cannot enter letters, only numbers. <br />Please try again!</strong>";
        ShowResults.innerHTML = errorMessage;
    }
    else {
        var result = firstNumber + secondNumber;
        if (!isNaN(result)) {
            document.getElementById('TBanswer').value = result.toFixed(2);
        }
    }
}

function subtractNum() {

    var firstNumber = parseFloat(document.getElementById('txtNum1').value);
    var secondNumber = parseFloat(document.getElementById('txtNum2').value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        errorMessage = "<strong>Numbers fields cannot be left blank. <br />Also, you cannot enter letters, only numbers. <br />Please try again!</strong>";
        ShowResults.innerHTML = errorMessage;
    }
    else {
        var result = firstNumber - secondNumber;
        if (!isNaN(result)) {
            document.getElementById('TBanswer').value = result.toFixed(2);
        }
    }
}

function multiplyNum() {

    var firstNumber = parseFloat(document.getElementById('txtNum1').value);
    var secondNumber = parseFloat(document.getElementById('txtNum2').value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        errorMessage = "<strong>Numbers fields cannot be left blank. <br />Also, you cannot enter letters, only numbers. <br />Please try again!</strong>";
        ShowResults.innerHTML = errorMessage;
    }
    else {
        var result = firstNumber * secondNumber;
        if (!isNaN(result)) {
            document.getElementById('TBanswer').value = result.toFixed(2);
        }
    }
}

function divideNum() {

    var firstNumber = parseFloat(document.getElementById('txtNum1').value);
    var secondNumber = parseFloat(document.getElementById('txtNum2').value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        errorMessage = "<strong>Numbers fields cannot be left blank. <br />Also, you cannot enter letters, only numbers. <br />Please try again!</strong>";
        ShowResults.innerHTML = errorMessage;
    }
    else if (secondNumber == 0) {
        errorMessage = "<strong>You cannot divide by 0. Please enter a number other than zero</strong>";
        ShowResults.innerHTML = errorMessage;
    }
    else {
        var result = firstNumber / secondNumber;
        if (!isNaN(result)) {
            document.getElementById('TBanswer').value = result.toFixed(2);
        }
    }
}

function startOver() {
    var firstNumber = document.getElementById("txtNum1").value = "";
    var secondNumber = document.getElementById("txtNum2").value = "";
    var TBanswer = document.getElementById("TBanswer").value = "";
    document.getElementById('ShowResults').innerHTML = '';
}