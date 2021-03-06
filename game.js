let activeNumber = '';
let activeOperator = '';
let storedNumber = '';

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
    document.querySelector('#screen').innerHTML = activeNumber;
}

function operatorIsPressed(operator) {
    activeOperator = operator;
    console.log(activeOperator);
    switch (activeOperator) {
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
    doMath();
    storedNumber = activeNumber;
    activeNumber = '';

}

function equalIsPressed() {
    doMath();
    storedNumber = '';
    switch (activeOperator) {
        case '+':
            document.querySelector('.plus').classList.remove('selected');
            break;
        case '-':
            document.querySelector('.minus').classList.remove('selected');
            break;
        case 'x':
            document.querySelector('.multiply').classList.remove('selected');
            break;
        case '/':
            document.querySelector('.divide').classList.remove('selected');
            break;
    }
};

function clearScreen() {
    activeNumber = '';
    activeOperator = '';
    storedNumber = '';
    updateScreen();
}


function doMath() {
    if (activeNumber && storedNumber && activeOperator) {
        switch (activeOperator) {
            case '+':
                activeNumber = parseFloat(storedNumber) + parseFloat(activeNumber);
                break;
            case '-':
                activeNumber = parseFloat(storedNumber) - parseFloat(activeNumber);
                break;
            case 'x':
                activeNumber = parseFloat(storedNumber) * parseFloat(activeNumber);
                break;
            case '/':
                activeNumber = parseFloat(storedNumber) / parseFloat(activeNumber);
                break;
        };
        activeNumber = activeNumber.toFixed(2);
        if (activeNumber.endsWith('.00')) {
            activeNumber = Math.floor(activeNumber);
        }
        updateScreen();
    };
};


