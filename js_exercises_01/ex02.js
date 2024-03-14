/*
JavaScript – functions
The following exercise contains the following subjects:

● functions

Instructions

1. Write a function called ‘countryInfo’ which takes three
parameters: 'country', 'population' and 'capitalCity'. Based
on this input, the function returns a string with this format:
‘Spain has 47 million people and its capital city is Madrid’
*/

let countryInfo = (country, populationM, capitalCity) => {
    return (`${country} has ${populationM} million people and its capital city is ${capitalCity}.`)
}

countryInfo('Spain', 47, 'Madrid')


/*
2. Call this function 3 times, with input data for 3 different
countries. Store the returned values in 3 different
variables, and log them to the console.
*/
let countriesInfo = []
countriesInfo.push(countryInfo('Spain', 47, 'Madrid'));
countriesInfo.push(countryInfo('France', 67, 'Paris'));
countriesInfo.push(countryInfo('Brasil', 243, 'Brasilia'));

for (let i = 0; i<countriesInfo.length; i++){
    console.log(countriesInfo[i]);
}