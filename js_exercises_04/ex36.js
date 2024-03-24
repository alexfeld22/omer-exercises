/*
JavaScript – scope & hoisting
The following exercise contains the following subjects:

● scope
● hoisting

Instructions

Without running the code below, explain in your own words
what the result of each block of code will be and why.

If there are any faulty outputs, please write on how we can fix
them.

Block 1

function funcA() {
    console.log(a); // undefined. To fix put console.log after line "var a = 1;"
    console.log(foo()); // 2
    var a = 1;
        function foo() {
            return 2;
        }
    }

funcA(); // undefined, 2


Block 2

var fullName = 'John Doe';

var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
            }
        }
    };

console.log(obj.prop.getFullName()); // 'Aurelio De Rosa'

var test = obj.prop.getFullName; // test = function(){return this.fullName;}.

console.log(test()); // 'John Doe', cause "this" is Window. this.fullName is "var fullName = 'John Doe';"



Block 3

function funcB() {
    let a = b = 0; // GLOBAL SCOPE, var b = 0;
    a++;
    return a;
    }

funcB(); // 1
console.log(typeof a); // undefined
console.log(typeof b); // number, b = 0



Block 4

function funcC() {
    console.log("1");
    }
    
funcC(); // 2 (!)

function funcC() {
    console.log("2");
    }

funcC(); // 2



Block 5

function funcD1() {
    d = 1;
    }
    
funcD1(); 
    
console.log(d); // 1
    
function funcD2() {
    var e = 1; 
    }

funcD2();

console.log(e); // Uncaught ReferenceError: e is not defined
    



Block 6

function funcE() {
console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
*/


function funcE() {
    console.log("Value of f in local scope: ", f); // 1
    }

console.log("Value of f in global scope: ", f); // undefined

var f = 1;

funcE();

// undefined (from line 5)
// 1 (from line 9)



/*
Var, Let and Const

- var declarations are globally scoped or function scoped while let and const are block scoped.
- var variables can be updated and re-declared within its scope; 
let variables can be updated but not re-declared; 
const variables can neither be updated nor re-declared.
- They are all hoisted to the top of their scope. 
But while var variables are initialized with undefined, let and const variables are not initialized.
- While var and let can be declared without being initialized, const must be initialized during declaration.
*/

/*
If you assign a value to a variable without declaring it using var, let, or const in JavaScript, 
and you are not in strict mode ('use strict';), 
then the variable is automatically created in the global scope as if it were declared with var. 
*/


/*
In JavaScript, function declarations are hoisted to the top of their containing scope along with their definitions. 
This means that the entire function, including its body, is moved to the top during the code execution phase. 
Therefore, if you have multiple declarations of the same function name in the same scope, the later declarations 
will overwrite the earlier ones.

Given the code snippet you've provided, here's what happens due to hoisting:

Both funcC function declarations are hoisted to the top of their scope, with the second declaration overwriting the first one.
When funcC() is called the first time, it refers to the most recently defined version of funcC, which logs "2".
When funcC() is called the second time, it still refers to the same (most recently defined) version of funcC, which logs "2" again.
2
2

*/