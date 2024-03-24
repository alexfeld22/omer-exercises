/*
JavaScript – functions
The following exercise contains the following subjects:

● Debugging

Instructions

# Note: We ask you not to solve the bug by finding it with
your eyes but to use the debugging tools we've learned!
What is wrong with this code?

function getSum(arr1, arr2){
const sum = 0;
for (let i=0; i < arr1.length; i++){
sum += arr1[i];
}
for (let i=0; i < arr2.length; i++){
sum += arr2[i];
}
}
getSum([1,2,3][5,66,23]);

1. First, find the line that contains the problem. Write it down.
1.1. getSum([1,2,3][5,66,23]);
1.2. const sum = 0;
1.3. missedd "return" in the function

2. Which debug method did you use to find the bug?
I used devTools in Chrome to debug the code.


3. Explain the bug in your own words.
3.1. getSum([1,2,3][5,66,23]); 
- there is missed comma between arrays.
3.2. const sum = 0;
- the variable "sum" should be declaread as "let", because we are changing it's value in the code
3.3. missedd "return" in the function
The function returns nothing while should return sum. 

4. Fix the code and submit it all.
*/

function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }

    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
    
    return sum;
}

console.log(getSum([1,2,3],[5,66,23]));