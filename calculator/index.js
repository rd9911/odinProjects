// Operations
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
        return subtract(num1, num2);
    } else if (operation === 'divide') {
        return divide(num1, num2);
    } else if (operation === 'multiply') {
        return multiply(num1, num2);
}
}
//

const container = document.querySelector('#container');
const grids = document.createElement('div');
const displayOfCalculator = document.createElement('div');
var textPanel = document.createElement('h3');
grids.id = 'grids';
displayOfCalculator.id = 'display';
textPanel.id = 'text-panel';

var total = null;
var secondNum = 0;
var operator = '';
//
const idOfElement = [
    'clear', 'factor', 'percentile', 'divide', 'seven', 'eight', 
    'nine', 'multiply', 'four', 'five', 'six', 'subtract', 'one', 'two', 
    'three', 'add', 'zero', 'brackets', 'floating', 'calculate']
const textOfElement = [
    'AC', '!', '%', '/', '7', '8', '9', '*',
    '4', '5', '6', '-', '1', '2', '3', '+', '0', '(   )', '.', '='
]
const numbersIds = ['seven', 'eight', 
'nine', 'four', 'five', 'six', 'one', 'two', 
'three', 'zero'];
const operatorIds = ['divide', 'multiply', 'subtract', 'add']
//


// Create buttons of calculator
container.style.setProperty('--grid-rows', 6);
container.style.setProperty('--grid-cols', 4);
for(let i=0; i < idOfElement.length; i++) {
    let btn = document.createElement('button');
    btn.id = idOfElement[i];
    btn.innerHTML = textOfElement[i];
    btn.type = 'button'
    // add attributes and styles
    grids.appendChild(btn).classList = 'grid-item';
};

displayOfCalculator.appendChild(textPanel);
container.appendChild(displayOfCalculator);
container.appendChild(grids);

let btnsNodeList = document.querySelectorAll('.grid-item');
const buttonsArray = Array.from(btnsNodeList);
// Add EventListeners
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', (e) => {
    textPanel.textContent = '';
    operator = '';
    total = null;
    secondNum = '';
});
const calculateBtn = document.querySelector('#calculate');
calculateBtn.addEventListener('click', (e) => {
    secondNum = parseInt(textPanel.textContent);
    if (total && secondNum && operator) {
        total = operate(operator, total, secondNum);
        textPanel.textContent = total;
    }
})

for(let i=0; i<buttonsArray.length; i++) {
    if (numbersIds.includes(buttonsArray[i].id)) {
        buttonsArray[i].addEventListener('click', (e) => {
            if (operator === '') {
                textPanel.textContent += e.target.textContent;
            } else {
                textPanel.textContent += e.target.textContent;
            }



        })
    } else if (operatorIds.includes(buttonsArray[i].id)) {
        buttonsArray[i].addEventListener('click', (e) => {
            if (textPanel.textContent && total === null) {
                operator = e.target.id;
                if (textPanel.textContent.includes('.')) {
                    total = parseFloat(textPanel.textContent)
                }
                total = parseInt(textPanel.textContent)
                textPanel.textContent = '';
            } else {
                operator = e.target.id;
                textPanel.textContent = '';
            }
        })
    }
};

