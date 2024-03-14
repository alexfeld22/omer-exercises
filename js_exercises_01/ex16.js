/*
The following exercise contains the following subjects:

● Ternaries

● Logical operators

Instructions

Create a simple password validation function that takes a
password string as an argument.

If the length of the password is more than 7 characters return
“Strong”. If it is less than 7 characters long return “Weak.

1. Create a function that uses an if/else conditional
expression.
*/

let isStorngPswd = function (pswd){
    if (pswd.length <= 7){
        return "Weak";
    }
    
    return "Strong";
}

// 2. Create a function that uses a ternary conditional
// expression.

let isStorngPswd2 = function (pswd){
    let pswdCheck = pswd.length <= 7 ? "Weak" : "Strong";
    return pswdCheck;
}

// 3. Create a function that uses a && logical operator.

let isStorngPswd3 = function (pswd){
    const regExp = /[A-Z]/
    let pswdCheck = pswd.length >= 7 && regExp.test(pswd) ? "Strong" : "Weak";
    return pswdCheck;
}

/*
4. Create an “advanced” password validation function that
takes a password string as an argument.

If the password length is more than 7 characters long and
has at least one capital letter return “Very Strong”. If the
password length is only 7 characters long returns “Strong”.
If the password length is less than 7 characters long return
“Weak”
Use only a ternary conditional expression.
*/

let isStorngPswd4 = function (pswd){
    const regExp = /[A-Z]/
    let check = (pswd.length >= 7) + (regExp.test(pswd));
    let pswdCheck;
    switch(check){
        case(2): pswdCheck = "Very Strong 💪"; break;
        case(1): (pswd.length >= 7) ? pswdCheck = "Strong 👍" : pswdCheck = "Weak 😞" ; break;
        default: pswdCheck = "Weak 😞";
    };
    return pswdCheck;
}