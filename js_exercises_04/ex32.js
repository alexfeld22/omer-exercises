/*
JavaScript – get sum
The following exercise contains the following subjects:

● find smallest

Instructions

# Note: We ask you not to solve the bug by finding it with
your eyes but to use the debugging tools we've learned!
What is wrong with this code?

function findSmallest(a, b, c){
if (a > b > c){
return c;
} else if (a > c > b) {
return a;
} else {
return b;
}
}
findSmalest(52,66, 2);

1. First, find the line that contains the problem. Write it down.
1.1. findSmalest(52,66, 2)
1.2. logic error in the function:
it checks only 2 variants from 3


2. Which debug method did you use to find the bug?
2.1. console.log()
2.2. devTools

3. Explain the bug in your own words.
3.1. Misspelling in a funcion name when we calling it
3.2. False logic in the function.

4. Fix the code and submit it all.
*/

function findSmallest(a, b, c){
    // if (a > b){
    //     if (b > c){
    //         return c;
    //     }else{
    //         return b;
    //     }
    // } else{
    //     if (a > c){
    //         return c;
    //     }else{
    //         return a;
    //     }
    // }
    return Math.min(a,b,c);
}

console.log(findSmallest(52,66, 2));
