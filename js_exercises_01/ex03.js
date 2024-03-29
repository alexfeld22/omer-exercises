/*
JavaScript – functions
The following exercise contains the following subjects:

● functions

Instructions

Why pay a fortune teller when you can just program your
fortune yourself?

1. Write a function named `tellFortune` that takes 4
parameters:

jobTitle, location, partnerName, numberOfChildren.
Based on this output the function returns a string with this
format:

‘You will be a programmer in New York married to Rana
with 2 children’.
*/

let tellFortune = function (jobTitle, location, parthnerName, numberOfChildren){
    console.log(`You will be a ${jobTitle} in ${location} married to ${parthnerName} with ${numberOfChildren} children.`);
}

tellFortune('Programmer','New York','Rana',2);
