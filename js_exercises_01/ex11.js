/*
The following exercise contains the following subjects:

● Order Of Operation
● If statements

Instructions

John and Mike both play basketball on different teams. In the
latest 3 games, John's team scored 89, 120, and 103 points,
while Mike's team scored 116, 94, and 123 points.

1. Calculate the average score for each team.

2. Decide which team wins on average (highest average
score), and print the winner to the console. Also include
the average score in the output.

3. Then change the scores to show different winners. Don't
forget to take into account that there might be a draw (the
same average score).

4. EXTRA: Mary also plays basketball, and her team scored
97, 134, and 105 points. Like before, log the average
winner to the console.

5. Like before, change the scores to generate different
winners, keeping in mind there might be draws.
*/

let teamsScores = [
    {
        team: 'John',
        scores: [89,120,103],
        avgScore: -1 // "-1" means we haven't calculated avgScore yet
    },
    {
        team: 'Mike',
        scores: [116,94,123],
        avgScore: -1
    }
];

const getAvgFromArray = function(numArray){
    if (numArray.length === 0){
        return 0;
    }
    let sum = numArray.reduce((a,b)=>a+b,0); 
    let cnt = numArray.length;
    let avg = sum/cnt;
    return avg;
};

// Function to calculate avgScore for teams
const fillAvgScoreForTeams = function (scoresArray){
    for(let i=0; i< scoresArray.length; i++){
        //if (scoresArray[i].avgScore === -1){
            scoresArray[i].avgScore = getAvgFromArray(scoresArray[i].scores);
        //}
    }
};

const defineWinnerTeam = function(scoresArray) {
    if (scoresArray.length === 0) {
        console.log('No winners');
        return -1;
    }else if (scoresArray.length === 1) {
        console.log(`${scoresArray[0].team} team is winner`);
        return scoresArray[0].avgScore;
    }else{
        let higestAvgScore = 0;
        for(let i=0; i < scoresArray.length; i++){
            if (scoresArray[i].avgScore > higestAvgScore){
                higestAvgScore = scoresArray[i].avgScore;
            }
        }
        let winners = scoresArray
            .filter((item,index) => item.avgScore === higestAvgScore)
            .map(obj=>obj.team);
        
        let result = {
            winners: winners,
            higestAvgScore: higestAvgScore
        }
        return result;
    }
};

fillAvgScoreForTeams(teamsScores);

let winnerTeams = defineWinnerTeam(teamsScores);

console.log(`Our winners: ${winnerTeams.winners.join()} with average score ${winnerTeams.higestAvgScore}.`);

//extra:

teamsScores.push({
    team: 'Maria',
    scores: [97,134,105],
    avgScore: -1
})

fillAvgScoreForTeams(teamsScores);
winnerTeams = defineWinnerTeam(teamsScores);
console.log(`Our winners: ${winnerTeams.winners.join()} with average score ${winnerTeams.higestAvgScore}.`);


//extra+:
teamsScores.push({
    team: 'Professional',
    scores: [112,112,112],
    avgScore: -1
})

fillAvgScoreForTeams(teamsScores);
winnerTeams = defineWinnerTeam(teamsScores);
console.log(`Our winners: ${winnerTeams.winners.join()} with average score ${winnerTeams.higestAvgScore}.`);