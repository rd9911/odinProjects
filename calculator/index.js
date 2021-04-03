const container = document.querySelector('#container');
const grids = document.createElement('div');
grids.id = 'grids';


const displayOfCalculator = document.createElement('div');
displayOfCalculator.id = 'display';
const textPanel = document.createElement('h3');
textPanel.id = 'text-panel';
displayOfCalculator.appendChild(textPanel);
container.appendChild(displayOfCalculator);


const idOfElement = [
    'clear', 'factor', 'percentile', 'divide', 'seven', 'eight', 
    'nine', 'multiply', 'four', 'five', 'six', 'subtract', 'one', 'two', 
    'three', 'add', 'zero', 'brackets', 'floating', 'calculate']
const textOfElement = [
    'AC', '!', '%', '/', '7', '8', '9', '*',
    '4', '5', '6', '-', '1', '2', '3', '+', '0', '()', '.', '='
]


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

container.appendChild(grids);

// add EventListeners