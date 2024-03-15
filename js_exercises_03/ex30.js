/*
The following exercise contains the following subjects:
● callback functions

Instructions

1. Write a function called ‘isString’ that receives 2 arguments,
a string and a callback function. The function checks that
the string is indeed a string. If the string is a string, pass
the string to a callback function that logs that string to the
console.
*/

function printStr(str){
    console.log(str);
}

function isString(str,actionFunction){
    if(typeof(str) === 'string'){
        actionFunction(str)
    }
}

isString(10,printStr);

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.

function firstWordUpperCase (str='', actionFunction){
    let firstWordCaptalized = str.split(' ')[0].toUpperCase();
    let strChanged = `${firstWordCaptalized} ${str.slice(firstWordCaptalized.length)}`;
    
    let strChanged2 = actionFunction(strChanged,' ','-');

    return strChanged2;
}

function replaceLettersInStr(str,findLetter,replaceLetter){
    let strChanged = str.split(findLetter).join(replaceLetter);
    return strChanged;
}

// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.

// 4. Create your own function that will receive from one of its
// arguments a callback function


