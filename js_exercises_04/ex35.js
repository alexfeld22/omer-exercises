/*
JavaScript – occurences
The following exercise contains the following subjects:

● debugging

Instructions

# Note: We ask you not to solve the bug by finding it with
your eyes but to use the debugging tools we've learned!
What is wrong with this code?

function countOccurrences (str, char){
let counter = 0 ;
for ( let i = 0 ; i < str .length; i ++ ){
if ( str . charAt ( i ) === char ){
counter + 1 ;
}
} return counter ;
}
countOccurrences ( "ini mini miny moe" , "n" );

1. First, find the line that contains the problem. Write it down.
1.1. counter + 1 ;

2. Which debug method did you use to find the bug?
2.1. console.log()
2.2. devTools

3. Explain the bug in your own words.
3.1. the code doesn't update this counter variable. 

4. Fix the code and submit it all.

*/

function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
        if ( str . charAt ( i ) === char ){
        counter += 1 ;
        }} 
    return counter ;
    }

console.log(countOccurrences ( "ini mini miny moe" , "n" ));