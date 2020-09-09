/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. 
  After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var winningScore, scores, roundScore, activePlayer, gamePlaying, previousDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function() { 
    if (gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1.
        /*
        Challenge, Part 1
        A player looses his ENTIRE score when he rolls two 6 in a row. 
        After that, it's the next player's turn.
        */

        if (dice === 6 && previousDice === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();
        } else if (dice !== 1) {
            // Save dice result
            previousDice = dice;

            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying) {
        // Round score gets added to active player's global score
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

/*
Challenge, Part 2

Add an input field to the HTML where players can set the winning score, 
so that they can change the predefined score of 100. 
(Hint: you can read that value with the .value property in JavaScript. 
This is a good opportunity to use google to figure this out :)
*/
document.querySelector('.winning-score').addEventListener('submit', function(event) {
    var input = document.querySelector('.winning-score-value');

    // Undefined, 0, null or "" are coerced to false
    if (input.value) {
        winningScore = input.value;
        document.querySelector('.btn-submit').style.display = 'none';
        input.setAttribute('disabled', true);
        event.preventDefault();
    }
});

function nextPlayer() {
    // Round score gets lost
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Active player changes
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // Previous dice is set to 0
    previousDice = 0;

    // Dice gets hidden
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    winningScore = 100;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    previousDice = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.winning-score-value').value = '';
    document.querySelector('.winning-score-value').removeAttribute('disabled');
    document.querySelector('.btn-submit').style.display = 'initial';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}
