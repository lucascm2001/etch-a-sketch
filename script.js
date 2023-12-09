const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {

    const square = document.createElement('div');
    const containerLen = getComputedStyle(container).width;

    // extract number from containerLen
    const cLen = Number(containerLen.replace(/[^0-9]/g, ''));
    //accounts for the 1px border
    const width = (cLen - 32)/16;
    square.style.width = `${width}px`;
    square.style.height = `${width}px`;
    square.style.border = 'solid black 1px';

    // add hover effect
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'black';
    });


    container.appendChild(square);
}
