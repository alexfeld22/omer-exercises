/*
The following exercise contains the following subjects:
● functions
Instructions

Write a function that calculates the circle area by a given radius
as an argument. Print the area as it is calculated and then print
it rounded to two decimal places.
*/

let circleArea = function (radius) {
    return (Math.PI*radius**2)
}

console.log(circleArea(10));

console.log(Math.round(circleArea(10)*100)/100);