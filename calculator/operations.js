function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function divide(num1, num2) {
    if (num2===0) {
        return 'Error';
    };
    return num1 / num2;
};

function multiply(num1, num2) {
    return num1 * num2;
}

// function factorial(num) {
//     for (let i=0; i<num-1; i++) {
//         let total = num
//     }
// }

function operate(operation, num1, num2) {
    if (operation === 'add') {
        return add(num1, num2);
    } else if (operation === 'subtract') {
        return subtract(num2, num2);
    } else if (operation === 'divide') {
        return divide(num2, num2);
    } else if (operation === 'multiply') {
        return multiply(num2, num2);
}
}