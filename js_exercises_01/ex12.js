/*
The following exercise contains the following subjects:

● JavaScript

Instructions

Write a function that takes one argument n, an integer.

Print out all the numbers between 1 to n.

If the number is only divisible by 7 print “BOOM”

If the number is divisible by 7 and also includes the digit 7 print
“BOOM-BOOM”

If either of the above cases prints the number.

Example of numbers between 1 to 18:

1,2,3,4,5,6, BOOM-BOOM,8,9,10,11,12,13,BOOM,15,16,17,18

Hint:
Use the includes method to find out if the number includes a 7
*/

const boom7 = function(num){
    let result = [];

    for (let i = 1; i <= num; i++){
        let nextVal = 
            i%7 === 0 ? 
                String(i).includes('7') ? 'BOOM-BOOM' : 'BOOM' :
                i;
        result.push(nextVal);
    }

    console.log(result.join());
}