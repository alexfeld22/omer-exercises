/*
JavaScript – more on data types
The following exercise contains the following subjects:
● data types
Instructions
1. Create a variable whose value holds a string.
2. Create a variable whose value holds a number.
3. Create a variable whose value holds an object.
4. Create a variable whose value holds a boolean.
5. Create a variable whose value holds null.
6. Create a variable whose value is undefined.
7. Create a variable whose value holds a symbol.
Console log the types of your variables.
*/

let str = 'string';
let num = 10;
let obj = {
    name: 'Alex',
    occupation: 'student'
}
let bool = true;
let n = null;
let u;
let mySymbol = Symbol('mySymbolKey');

console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(obj));
console.log(typeof(bool));
console.log(typeof(n));
console.log(typeof(u));
console.log(typeof(mySymbol));