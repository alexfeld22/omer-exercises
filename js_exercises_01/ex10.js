/*
The following exercise contains the following subjects:
● conditional statements

Instructions

Create a function that takes 1 argument, a number score.
Returns either “A”, ”B”, “C”, “D”, “F”.
score of:
0-64 is a “F”
65-69 is a “D”
70-79 is a “C”
80-89 is a “B”
90-100 is an “A
*/

const rank = function(num){
    let result = 'unknown';

    if (num >= 0 && num <= 100 && typeof(num) == 'number') {
        result = 
            num >= 90 && num <= 100 ? 'A' :
            num >= 80 ? 'B' :
            num >= 70 ? 'C' :
            num >= 65 ? 'D' : 'F'
    }

    return result;
}