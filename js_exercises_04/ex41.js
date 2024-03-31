/*
JavaScript – closures
The following exercise contains the following subjects:

● closures

Instructions
Without running the code below, explain in your own
words what the result of each block of code will be and
why.

Block 1

var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9); // function otherFunction() {return b};
var result = firstResult(2); // 5



Block 2

var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2(); // undefined
console.log(a); // 1


Block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100); //3, 3 times
}
*/

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100); //undefined
}


/*

The code snippet you provided creates a loop that iterates three times, with each iteration setting up a timeout 
that logs the current value of i after a 100-millisecond delay. Here's how it works step by step:

Loop Initialization: The loop starts with i set to 0.

Loop Execution: For each iteration (i = 0, 1, 2), the loop creates a function log that, when called, 
logs the current value of i to the console. This function is then passed to setTimeout, which is scheduled to execute 
the log function after 100 milliseconds. Note that setTimeout doesn't block the execution of the loop, so the loop 
continues to the next iteration immediately after scheduling the timeout.

Closure: The log function created in each iteration of the loop forms a closure around the variable i. A closure allows 
the function to remember and access the i variable even after the loop has completed its execution. However, 
it's important to note that the function captures the variable i, not the value of i at the time the function is created.

End of Loop: After the final iteration of the loop, i is incremented to 3, and the loop condition (i < 3) is no longer true, 
so the loop terminates.

Timeout Execution: By the time the setTimeout calls execute (all roughly at the same time, 100 milliseconds after 
  the loop starts), the loop has already finished, and the value of i has reached 3. 
  Because each log function references the same i variable (thanks to the closure), and the loop has already 
  completed by the time any setTimeout callback is executed, each log function logs 3 to the console.

Output: The output of this code will be 3 printed to the console three times, not 0, 1, 2 as might be intuitively expected. 
This happens because the timeouts are executed after the loop has finished, and by that time, the value of i has become 3.

Correction Note: Your comment "//undefined" next to the setTimeout call might be a misunderstanding. 
The undefined you might be thinking of is not directly related to setTimeout. In JavaScript, setTimeout itself doesn't 
return undefined; it returns a numeric timeout ID. However, the log function doesn't return anything, 
so if you were to examine the return value of log(), it would indeed be undefined, but this behavior isn't related 
to the setup with setTimeout here.
*/

class User{
  #data // private property
  constructor(_id, _username, _salary){
    // properties
    this.i = _id; // usually put _ before each property of a class. (????)
    this.u = _username;
    this.s = _salary + 1000;
    this.data = _username;


    // for methods that we want to be inherited by other subclass
    // we should define inside a constructor
    this.displayData = function(){ 
      return `Hey ${this.u}, your salary is ${this.s}.`;
    };

    this.displayDataPrivate = function(){ 
      console.log(this.data);
    };

  }

  // methods
  displayMoreData(){
    return `Hey ${this.u}, your id is ${i} andyour salary is ${this.s}.`;
  }

  // UPDATE built-in properties and constructors
  updateDate(data){
    this.u = data;
  }

}

let userOne = new User (100, 'brilliant', 3000);
console.log(userOne);
console.log(userOne.u); // 'brilliant'

userOne.updateDate('Omer');
console.log(userOne.u); // 'Omer'



// INHERITANSE
// (!) gpt

class MainUser extends User{
  constructor(_id, _username, _someData){
    super(_id, _username);
    this.someData = _someData;
  }
  createuserUI(){
    let dashboard = document.createElement('div');
    let body = document.body;
    body.append(dashboard);
    dashboard.style.cssText = 'height: 100px; width:100px; background-color:blue;'
  }
}

let mainuser = new MainUser(105, 'Omer', 2000);


class SuperAdmin extends MainUser{
  constructor(_id, _username, _someData, _loginInfo){
    super(_id, _username, _someData);
    this.loginInfo = _loginInfo;
  }
}


let superAdmin = new SuperAdmin(103, 'Omer2', 'Blabla', 19121231);

superAdmin.displayData()
// Hey, Omer2, your salary is NaN

superAdmin.displayMoreData()
// Hey, Omer2, your salary is NaN



class User2{
  #salary = 100;// private property, could be equal to anything, doesn't matter.

  constructor(id, username, salary){
    // properties
    this.i = id;
    this.u = username;
    this.#salary = salary;
  }
  getSalary(){
    this.#salary;
  }
}

let userOne2 = new User2(10, 'Omer', '2000 USD');

console.log(userOne2);

class MasterUser2 extends User2{
  constructor(id, username, salary){
    super(id, username, salary)
  }
  getAnotherSalary(){
    return this.salary;
  }
}