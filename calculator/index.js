const grids = document.createElement('ul');
grids.id = 'grids';
const idOfElement = [
    'display', 'clear', 'factor', 'percentile', 'divide', 'seven', 'eight', 
    'nine', 'multiply', 'four', 'five', 'six', 'subtract', 'one', 'two', 
    'three', 'add', 'zero', 'floating', 'calculate']
for(let i=0; i < idOfElement.length; i++) {
    let li = document.createElement('li');
    li.id = idOfElement[i];
    // add attributes and styles.
};

const container = document.querySelector('#container');
container.appendChild(grid);

