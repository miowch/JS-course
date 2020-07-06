// 1. Calculate the average score for each team.
var averageScoreJohn = (89 + 120 + 103) / 3;
var averageScoreMike = (116 + 94 + 123) / 3;

// 2. Define the winner.
var winner, winnerScore;
if (averageScoreJohn > averageScoreMike) {
    winner = 'John\'s team';
    winnerScore = averageScoreJohn;
} else if (averageScoreJohn < averageScoreMike) {
    winner = 'Mike\'s team';
    winnerScore = averageScoreMike;
} else {
    winner = 'draw';
}

// Extra
var averageScoreMary = (97 + 134 + 105) / 3;

switch (true) {
    case
    averageScoreJohn > averageScoreMike &&
    averageScoreJohn > averageScoreMary:
        winner = 'John\'s team';
        winnerScore = averageScoreJohn;
        break;
    case
    averageScoreMike > averageScoreJohn &&
    averageScoreMike > averageScoreMary:
        winner = 'Mike\'s team';
        winnerScore = averageScoreMike;
        break;
    case
    averageScoreMary > averageScoreJohn &&
    averageScoreMary > averageScoreMike:
        winner = 'Mary\'s team';
        winnerScore = averageScoreMary;
        break;
    default:
        winner = 'draw';
}

// 3. Print the winner to the console.
if (winner === 'draw') {
        console.log('It\'s a draw!');
} else {
    console.log('The winner is ' + winner + ' with the score: ' + winnerScore);
}
