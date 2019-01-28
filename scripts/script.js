//Get buttons
var btn1 = document.getElementById('calc-1');
var btn2 = document.getElementById('calc-2');
var btn3 = document.getElementById('calc-3');
var btn4 = document.getElementById('calc-4');
var btn5 = document.getElementById('calc-5');
var btn6 = document.getElementById('calc-6');
var btn7 = document.getElementById('calc-7');
var btn8 = document.getElementById('calc-8');
var btn9 = document.getElementById('calc-9');
var btn0 = document.getElementById('calc-0');
var btndot = document.getElementById('calc-dot');
var btnbs = document.getElementById('calc-bs');
var btncl = document.getElementById('calc-cl');
var btnquot = document.getElementById('calc-quot');
var btnmult = document.getElementById('calc-mult');
var btnminus = document.getElementById('calc-minus');
var btnplus = document.getElementById('calc-plus');

//get screen result
var result = document.getElementById('result');

//get an array of number button
var numBtn = document.getElementsByClassName('calc-num')
var opBtn = document.getElementsByClassName('calc-operation')

var displayVal = '0';
var pendingVal;
var evalStringArray = [];
var screenReset = 0;


var updateDisplay = (clickObj) => {
    var btnText = clickObj.target.innerText;
    if (screenReset === 1) {
        displayVal = '0';
        result.innerText = displayVal;
        screenReset = 0;
    }

    if (displayVal === '0') {
        displayVal = '';
    }

    displayVal += btnText;
    result.innerText = displayVal;
}

var performOpp = (clickObj) => {
    var opp = clickObj.target.innerText;
    if (!evalStringArray.includes('+') && !evalStringArray.includes('-') && !evalStringArray.includes('*') && !evalStringArray.includes('/')) {
        switch (opp) {
            case '+':
                pendingVal = displayVal;
                displayVal = '0';
                evalStringArray.push(pendingVal);
                evalStringArray.push('+');
                break;
            case '-':
                pendingVal = displayVal;
                displayVal = '0';
                evalStringArray.push(pendingVal);
                evalStringArray.push('-');
                break;
            case '×':
                pendingVal = displayVal;
                displayVal = '0';
                evalStringArray.push(pendingVal);
                evalStringArray.push('*');
                break;
            case '÷':
                pendingVal = displayVal;
                displayVal = '0';
                evalStringArray.push(pendingVal);
                evalStringArray.push('/');
                break;
            case '=':
                screenReset = 1;
                evalStringArray.push(displayVal);
                var evaluation = eval(evalStringArray.join(' '));
                displayVal = evaluation + '';
                result.innerText = displayVal;
                evalStringArray = [];
                displayVal = '0';
                pendingVal = undefined;
                break;
            default:
                break;
        }
    }
    else {
        screenReset = 1;
        evalStringArray.push(displayVal);
        var evaluation = eval(evalStringArray.join(' '));
        displayVal = evaluation + '';
        result.innerText = displayVal;
        evalStringArray = [];
        switch (opp) {
            case '+':
                pendingVal = displayVal;
                displayVal = '0';
                evalStringArray.push(pendingVal);
                evalStringArray.push('+');
                break;
            case '-':
                pendingVal = displayVal;
                displayVal = '0';
                evalStringArray.push(pendingVal);
                evalStringArray.push('-');
                break;
            case '×':
                pendingVal = displayVal;
                displayVal = '0';
                evalStringArray.push(pendingVal);
                evalStringArray.push('*');
                break;
            case '÷':
                pendingVal = displayVal;
                displayVal = '0';
                evalStringArray.push(pendingVal);
                evalStringArray.push('/');
                break;
            default:
                break;
        }
    }
}


//Create event listeners
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', updateDisplay, false)
}
for (let i = 0; i < opBtn.length; i++) {
    opBtn[i].addEventListener('click', performOpp, false)
}

btncl.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    result.innerText = displayVal;
}

btnbs.onclick = () => {
    let lengthOfResult = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfResult - 1);

    if (displayVal === '') {
        displayVal = '0';
    }

    result.innerText = displayVal;
}

btndot.onclick = () => {
    if (!displayVal.includes('.')) {
        displayVal += '.';
    }

    result.innerText = displayVal;
}

