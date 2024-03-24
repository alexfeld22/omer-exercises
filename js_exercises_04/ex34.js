/*
JavaScript – average
The following exercise contains the following subjects:

● debugging

Instructions

# Note: We ask you not to solve the bug by finding it with
your eyes but to use the debugging tools we've learned!

What is wrong with this code?
function calcAverage (arr){
var sum ;
for ( var i = 0 ; i < arr .length; i ++ ){
sum += arr [ i ];
} return sum ;
}
calcAverage ([ 85 , 90 , 92 ]);

1. First find the line that contains the problem. Write it down.
1.1. sum += arr [ i ];
1.2. return sum

2. Which debug method did you use to find the bug?
2.1. console.log()
2.2. devTools

3. Explain the bug in your own words.
3.1. sum is undefined, sum + number = nan
3.2. return sum instead of avg

4. Fix the code and submit it all.

*/

function calcAverage (arr){

    var sum = 0;

    for ( var i = 0 ; i < arr .length; i ++ ){
        sum += arr [ i ];
    } 
    
    return sum / arr.length;

    }
    
console.log(calcAverage ([ 85 , 90 , 92 ]));