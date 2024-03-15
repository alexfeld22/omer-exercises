/*
The following exercise contains the following subjects:
● reduce method
Instructions
Write the following functions using the reduce built-in function.
*/

// 1. max
let max2 = function (arr){
    if (arr.length === 0){
        return null;
    }

    return (arr.reduce((a,b)=> a<b ? b : a,arr[0]))
}

// 2. the sum of even numbers
let sumEvenNumbers = function (arr){
    if (arr.length === 0){
        return null;
    }

    return (arr.reduce((a,b)=> b%2 ? a : a+b,0))
}

// 3. average
let avg2 = function (arr){
    if (arr.length === 0){
        return null;
    }

    return (arr.reduce((a,b)=>a+b,0)/arr.length)
}


    
