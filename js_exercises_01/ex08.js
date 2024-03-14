/*
The following exercise contains the following subjects:
● functions

Instruction

1. The world population is 7900 million people. Create
a function declaration called 'percentageOfWorld1'
which receives a 'population' value, and returns the
percentage of the world population that the given
population represents. For example, China has
1441 million people, so it's about 18.2% of the world
population.

2. To calculate the percentage, divide the given
'population' value by 7900 and then multiply by 100.

3. Call 'percentageOfWorld1' for 3 populations of
countries of your choice, store the results into
variables and log them to the console.
*/

const percentageOfWorld1 = function(populationM){
    let worldPopulationM = 7900;
    return (100*populationM/worldPopulationM);
}

const indiaPopulationM = 1408;
const germanyPopulationM = 83;
const andorraPupulationM = 0.08;

const indiaPopulationPercentage = percentageOfWorld1(indiaPopulationM);
const germanyPopulationPercentage = percentageOfWorld1(germanyPopulationM);
const andorraPopulationPercentage = percentageOfWorld1(andorraPupulationM);

console.log(indiaPopulationPercentage);
console.log(germanyPopulationPercentage);
console.log(andorraPopulationPercentage);

/*
4. Create a function expression that does the exact
same thing, called 'percentageOfWorld2', and also
call it with 3 country populations (can be the same
populations)
*/

const percentageOfWorld2 = percentageOfWorld1;

const indiaPopulationPercentage2 = percentageOfWorld2(indiaPopulationM);
const germanyPopulationPercentage2 = percentageOfWorld2(germanyPopulationM);
const andorraPopulationPercentage2= percentageOfWorld2(andorraPupulationM);

console.log(indiaPopulationPercentage2);
console.log(germanyPopulationPercentage2);
console.log(andorraPopulationPercentage2);
