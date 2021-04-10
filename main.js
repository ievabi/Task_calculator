// const nums = document.querySelectorAll('#num');
// const operations = document.querySelectorAll('#operator');
// const compute = document.querySelector('#eqn');
// const clear = document.querySelector('#delete');
// const screen = document.querySelector('#screen');
let prevNum = '';
let curNum = '';

//clears the screen - delete btn
clear.addEventListener('click', function () {
    document.querySelector('#screen').innerHTML = '';
})

// function calculate(prevNum, operation, curNum) {
//     let computation
//     firstNum = parseFloat(prevNum);
//     secondNum = parseFloat(curNum);
//     if (isNaN(firstNum) || isNaN(secondNum)) return;
//     switch (operation) {
//         case '+':
//             computation = firstNum + secondNum;
//             break;
//         case '-':
//             computation = firstNum - secondNum;
//             break;
//         case 'x':
//             computation = firstNum * secondNum;
//             break;
//         case '/':
//             computation = firstNum / secondNum;
//             break;
//         default:
//             return;
//     }
//     document.querySelector('#screen').innerHTML = computation;
//     prevNum = '';
//     curNum = '';
// }

// //displays the computed result on screen
// document.querySelector('#eqn').addEventListener('click', function(){
//     document.querySelector('#screen').innerHTML = compute();
// })

// Add numbers to screen
// function addNumbers(){
    let nums = document.querySelectorAll('#num');
    for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    num.addEventListener('click', function () {
        // curNum += num.innerHTML;
    document.querySelector('#screen').innerHTML += num.innerHTML;
    console.log(curNum);
    })
}
// }
let operationsArray = [];
// Add operator
// function addOperator(){
let operators = document.querySelectorAll('.operator');
for (let i = 0; i < operators.length; i++) {
    let operator = operators[i];
    operator.addEventListener('click', function () {
        operationsArray.push(operator.innerHTML);
    })
}
// }
