/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. 
  After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var winningScore, scores, roundScore, activePlayer, gamePlaying;

init();

/*
Challenge, Part 3
Add another dice to the game, so that there are two dices now. 
The player looses his current score when one of them is a 1.
(Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
document.querySelector('.btn-roll').addEventListener('click', function() { 
    if (gamePlaying) {
        // 1. Random number
        var dice_1 = Math.floor(Math.random() * 6) + 1;
        var dice_2 = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var dice_1_DOM = document.getElementById('dice-1');
        dice_1_DOM.style.display = 'block';
        dice_1_DOM.src = 'dice-' + dice_1 + '.png';

        var dice_2_DOM = document.getElementById('dice-2');
        dice_2_DOM.style.display = 'block';
        dice_2_DOM.src = 'dice-' + dice_2 + '.png';

        // 3. Update the round score IF none of the rolled numbers was a 1.
        if (dice_1 !== 1 && dice_2 !== 1) {
            // Add score
            roundScore += dice_1 + dice_2;
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
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
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

    // Dices get hidden
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    winningScore = 100;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

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
