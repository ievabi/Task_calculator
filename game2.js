let activeNumber = '';
let activeOperator = '';
let previousOperator = '';
let storedNumber = '';
let result = '';
let activeStoredNumber = ''; 

function numIsPressed(num) {
    if (activeNumber.length < 7) {
        
        if ((activeNumber == '') && num == '.') {
            activeNumber += `0${num}`;
        } else if (activeNumber.includes('.') && (num == '.')) {
            activeNumber = activeNumber;
        } else {
            activeNumber += num;
        }
    }
    updateScreen();
}

function updateScreen() {
    if (result !==''){
    document.querySelector('#screen').innerHTML = result;
}else {
    document.querySelector('#screen').innerHTML = activeNumber;
}
}

function operatorIsPressed(operator) {
    if (activeNumber && storedNumber && activeOperator) {
        doMath();
        previousOperator = activeOperator;
        activeOperator = operator;
        activeNumber = '';
        updateScreen();
        storedNumber = result;
        result = '';
    }
    else if (result !== '') {
        previousOperator = activeOperator;
        doMath();
        activeOperator = operator;
        storedNumber = result;
        updateScreen();
        result = '';

    } else {
        activeOperator = operator;
        doMath();
        storedNumber = activeNumber;
        activeNumber = '';
    }
}

function equalIsPressed() {
    doMath();
    // activeOperator = previousOperator;
    // storedNumber = result;
    // activeNumber = activeStoredNumber;
    document.querySelector('#screen').innerHTML = result;

};

function clearScreen() {
    activeNumber = '';
    activeOperator = '';
    storedNumber = '';
    result = '';
    previousOperator = '';
    updateScreen();
}


function doMath() {
    if (activeNumber && (storedNumber) && (activeOperator)) {
        switch (activeOperator || previousOperator) {
            case '+':
                result = parseFloat(storedNumber) + parseFloat(activeNumber);
                break;
            case '-':
                result = parseFloat(storedNumber) - parseFloat(activeNumber);
                break;
            case 'x':
                result = parseFloat(storedNumber) * parseFloat(activeNumber);
                break;
            case '/':
                result = parseFloat(storedNumber) / parseFloat(activeNumber);
                break;
        };
        result = result.toFixed(2);
        if (result.endsWith('.00')) {
            result = Math.floor(result);
        }
        activeStoredNumber = activeNumber;

    };
};

function switchButtonColor() {
    if (previousOperator){
        operatorPressed = previousOperator;
    } else {
    operatorPressed = activeOperator;
    }
    if (operatorPressed === '') {
        document.querySelector('.plus').classList.remove('selected');
        document.querySelector('.minus').classList.remove('selected');
        document.querySelector('.multiply').classList.remove('selected');
        document.querySelector('.divide').classList.remove('selected');
    } else {
        switch (operatorPressed) {
            case '+':
                document.querySelector('.plus').classList.add('selected');
                break;
            case '-':
                document.querySelector('.minus').classList.add('selected');
                break;
            case 'x':
                document.querySelector('.multiply').classList.add('selected');
                break;
            case '/':
                document.querySelector('.divide').classList.add('selected');
                break;
        }
    }
}
