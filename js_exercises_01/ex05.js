/*
The following exercise contains the following subjects:
● date methods
Instructions

Let us self-learn something. You come to your new workplace
and you are an expert in the technologies your company is
working with. But all of the sudden your boss says. We want to
implement a feature with dates. This will happen all the time in
your career. So let's roll up our sleeves and start googling. How
to .... “date js”.

And as always the MDN docs are a great source Find how to
get the following:
*/

// 1. Name of the current day e.g. Sunday

let now = new Date();
let weekDayNameOfToday = now.toLocaleString('he',{weekday: 'long'});
console.log(weekDayNameOfToday);

// 2. Current day of the month e.g. 31
console.log(now.getDate());

// 3. Current month e.g January
console.log(now.toLocaleString('he',{month: 'long'}));

// 4. Current Year e.g 2021
console.log(now.getFullYear());

// Create a function that will return a string in the following format:
// `Today is Sunday the 31 of January 2021’

let getTodayInfo = () => {
    let now = new Date();
    return (`Today is ${now.toLocaleString('en-us',{weekday: 'long'})} the ${now.getDate()} of ${now.toLocaleString('en-us',{month: 'long'})} ${now.getFullYear()}`);
}

getTodayInfo();