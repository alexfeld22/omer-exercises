/*
The following exercise contains the following subjects:

● Switch
Instructions

Create a function that receives one argument, a string color.

Create a switch statement that:
1. If the color is yellow, pink, or orange return from the
function “light color”.
2. If the color is a blue, purple, or brown return from the
function “dark color”.
3. If the color is none of the above return “Unknown color”.
Note:
It shouldn’t be case sensitive
*/

function getPaletteFromColor(color){
    let iColor = color.toLowerCase();
    let lightColors = ['yellow','pink','orange'];
    let darkColors = ['blue','purple','brown'];

    switch(true){
        case lightColors.includes(iColor):
            return 'Light color';
        case darkColors.includes(iColor):
            return 'Dark color';
        default:
            return 'unknown color'
    }
    
}
