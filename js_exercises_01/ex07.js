/*
The following exercise contains the following subjects:

● Declaring functions 2

Instruction

Copy the code below to your computer, answer the questions on the file, and submit.

JavaScript - Declaring Functions

The following exercise contains the following subjects:

* functions
Instructions

* Please reformat the following function
expressions to IIFE functions.

* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
*/

// From function declarations to explicit and implicit return functions (one of each).

// an explicit return example 
const welcome = function () {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
    }

// an implicit return example
const power = (a) => Math.pow(a, 2)


// From function expressions to IIFE functions.
const squareRoot = ((a) => Math.sqrt(a))(4);
const randomNumbers = ((a, b) => Math.random() * (a - b) + b)(10,20);

