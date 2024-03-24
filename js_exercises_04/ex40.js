/*
JavaScript – Font size changer
The following exercise contains the following subjects:

● DOM

Instructions

Create a webpage that has some text and two buttons with ‘+’ and ‘-‘ 
Clicking the ‘+’ button should increase the text’s font-size
and clicking the ‘-‘ should decrease it.
Limit the font size to be between 6px and 100px.
*/

let divContainer = document.createElement('div');
    

let btn1 = divContainer.appendChild(document.createElement('button'));
let btn2 = divContainer.appendChild(document.createElement('button'));
let p = divContainer.appendChild(document.createElement('p'));

p.style.fontSize = '14px';
p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia officiis odio earum doloremque inventore accusamus sed magnam perferendis velit necessitatibus illo, blanditiis aliquam distinctio tempore, consectetur impedit facere sit provident!";

btn1.textContent = '🔼';
btn2.textContent = '🔽';

document.body.appendChild(divContainer);

const upBorderPx = 32;
const downBorderPx = 10;


function changeFontSize (direction) { 
    return function () {
        let pElem = document.querySelector('p');
        let fontZise = window.getComputedStyle(pElem).getPropertyValue('font-size');
        let newFontSize = direction === 'up' ? `${parseInt(fontZise) + 1}px` : `${parseInt(fontZise) - 1}px`
        let parsedNewFontSize = parseInt(newFontSize);
        if (parsedNewFontSize >= downBorderPx && parsedNewFontSize <= upBorderPx) {
            pElem.style.fontSize = newFontSize;
        }
    }
}

btn1.addEventListener('click', changeFontSize('up'));
btn2.addEventListener('click', changeFontSize('down'));

