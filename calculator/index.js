
const container = document.querySelector('#container');
const grids = document.createElement('div');
const displayOfCalculator = document.createElement('div');
var textPanel = document.createElement('h3');
grids.id = 'grids';
displayOfCalculator.id = 'display';
textPanel.id = 'text-panel';

var total = 0;
var secondNum = 0;
var operationPress = false;

//
function eListenerForOperators(e) {
    if (e.target.id === 'calculate') {
        o
    }
    if (operationPress === false) {
        operationPress = true;
        total = parseInt(textPanel.textContent);
    } else {
        textPanel.textContent = e.target.textContent;
    }
}

function eListenerForNumbers(e) {
    if (operationPress === false) {
        textPanel.textContent += e.target.textContent;
    } else {
        total = parseInt(textPanel.textContent);
        textPanel.textContent = e.target.textContent;
    }
}

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
});

for(let i=0; i<buttonsArray.length; i++) {
    if (numbersIds.includes(buttonsArray[i].id)) {
        buttonsArray[i].addEventListener('click', (e) => {
            eListenerForNumbers(e);
        })
    } else if (operatorIds.includes(buttonsArray[i].id)) {
        buttonsArray[i].addEventListener('click', (e) => {
            eListenerForOperators(e);
        })
    }
};

