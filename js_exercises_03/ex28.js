/*
The following exercise contains the following subjects:
● for loop
Instructions
You are given two arrays:
const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];
Create a function that takes these two arrays as
arguments.
Compare these two arrays using 2 for loops and return the
items that are the same. If none are the same return false.
*/

const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function commonItemsInTwoArrays(arr1, arr2){
    let commonItems=[];
    let bothArrays = arr1.concat(arr2);
    let arr1Length = arr1.length;

    for (let i=0; i<arr1.length; i++){
        let item = bothArrays[i];
        if(bothArrays.includes(item,arr1Length) && !arr1.includes(item,i+1)){
            commonItems.push(item);
        }
    }

    return commonItems.length === 0 ? false : commonItems
}

console.log(commonItemsInTwoArrays(food,food1))