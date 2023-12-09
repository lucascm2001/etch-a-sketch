const container = document.querySelector('.container');

const button = document.querySelector('.submit');
const input = document.querySelector('.inputSubmit');

button.addEventListener('click', () => {
    // delete old grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // create new grid
    createGrid(input.value);


});

function createGrid(sideLen) {
    for (let i = 0; i < sideLen * sideLen; i++) {

        const square = document.createElement('div');
        const containerLen = getComputedStyle(container).width;
    
        // extract number from containerLen
        const cLen = Number(containerLen.replace(/[^0-9]/g, ''));
        //accounts for the 1px border
        const width = (cLen - 2 * sideLen)/sideLen;
        square.style.width = `${width}px`;
        square.style.height = `${width}px`;
        square.style.border = 'solid black 1px';
    
        // add hover effect
        const makeColor = (event) => {
            randRed = Math.floor(Math.random() * 256);
            randGreen = Math.floor(Math.random() * 256);
            randBlue = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;
        };
        square.addEventListener('mousedown', makeColor);
        square.addEventListener('mouseenter', (event) => {
            if (event.buttons == 1) makeColor(event);
        });
        square.addEventListener('mousedown', (e) => e.preventDefault());
    
    
        container.appendChild(square);
    }
}

