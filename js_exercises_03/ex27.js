/*
The following exercise contains the following subjects:
● Array
● Objects

Instructions

Create a function that takes one argument, an array.
Use this array:

const array = ["Hello", "Good Day", "Your
Welcome", "hotdog", "hamburgers"];

to count over all the letters and return an object with the
letter as the key and the letter count as the value.
Expected output:
{ h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
1, m: 2, t: 1, b: 1, s: 1 }
Note:
that it shouldn’t be case sensitive
Extra:
return the letter with the most occurrences as well
*/

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countLettersInArray(array){

    let str = String(array).toLowerCase();

    const regExpLetters = /[a-z]/g;

    let arrLetters = str.match(regExpLetters);

    let letterCounts={};
    let maxCount=0;
    let lettersMaxCount=[];

    for (let i=0; i<arrLetters.length; i++){
        
        let letter = arrLetters[i];
        
        if(Object.keys(letterCounts).includes(letter)){
            letterCounts[letter] += 1;
        }else{
            letterCounts[letter] = 1;
        }

        if(letterCounts[letter]>maxCount){
            maxCount = letterCounts[letter];
            lettersMaxCount = [letter];
        }else if (letterCounts[letter]===maxCount) {
            lettersMaxCount.push(letter);
        }
    }

    let result = {
        letterCounts: letterCounts,
        lettersMaxCount: lettersMaxCount,
        maxCount: maxCount
    }

    return result;

}

console.log(countLettersInArray(array));


