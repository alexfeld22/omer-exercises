/*
The following exercise contains the following subjects:

● Array
Instructions
For each of the questions below, answer the questions with this array:
*/
let people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a loop, iterate through this array and console.log all
// of the people.

for (let i = 0; i < people.length; i++){
    console.log(people[i]);
}

// 2. Write the command to remove "Greg" from the array.
console.log(people.shift());

// 3. Write the command to remove "James" from the array.
console.log(people.pop());

// 4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");

// 5. Write the command to add your name to the end of the
// array.
people.push("Alex");

// 6. Using a loop, iterate through this array, and after
// console.log "Mary", exit from the loop.
for(let i=0; i<people.length; i++){
    console.log(people[i]);
    if (people[i] === 'Mary'){
        break;
    }
}

// 7. Write the command to make a copy of the array using a
// slice. The copy should NOT include "Mary" or "Matt".
let peopleSliced = people.slice(2,people.length);

// 8. Write the command that gives the indexOf where "Mary"
// is located.
console.log(people.indexOf("Mary"));

// 9. Write the command that gives the indexOf where "Foo" is
// located (this should return -1).
console.log(people.indexOf("Foo"));

// 10. Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" from
// the array and add "Elizabeth"
// and "Artie". Your array should look like this when you are
// done ["Greg", "Mary", "Elizabeth", "Artie",
// "James"].
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth","Artie");

// 11. Create a new variable called withBob and set it equal
// to the people array concatenated with the string of "Bob"
let withBob = people.join() + ",Bob";

// 11th task is not clear, so here the 2nd solution:
let withBob2 = [...people];
for(let i=0; i<withBob2.length; i++){
    withBob2[i] += '+Bob';
    console.log(withBob2[i]);
}
console.log(withBob2);