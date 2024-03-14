/*
The following exercise contains the following subjects:
● arrays
● indexOf
Instructions
Create a function that received an array of integers as a
parameter.
Return a new array without any duplicates inside. You
indexOf as part of your solution.
Example:
[3,4,4,3,6,3] --→ [3,4,6]
*/

let array = [3,4,4,3,6,3];

let removeDuplicatesFromArr = function(arr){
    let arrCopy = [...arr];
    let arrCopyLength = arrCopy.length;

    for (let i=0; i<arrCopyLength; i++){

        let isChanged = false;
        
        while (arrCopy.indexOf(arrCopy[i],i+1) !== -1){
            let duplicateIndex = arrCopy.indexOf(arrCopy[i],i+1);
            arrCopy.splice(duplicateIndex,1);
            isChanged = true
        }

        if (isChanged) {
            arrCopyLength = arrCopy.length;
        }
    }

    return arrCopy

}