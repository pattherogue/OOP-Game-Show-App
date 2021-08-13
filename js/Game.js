/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* create the 'game' class */
class Game {
    constructor() {
        /* track the number of missed guesses */
        this.missed = 0;
        /* array of five 'Phrase' objects */
        this.phrases = this.storedPhrase();
        /* 'Phrase' currently in play */
        this.activePhrase = null;
    }

    storedPhrase() {
        let phraseList = [
            new Phrase('Buy low sell high'),
            new Phrase('I am waiting for the pullback'),
            new Phrase('The trend is your friend'),
            new Phrase('When the tide goes out you see who is swimming naked'),
            new Phrase('Investing should be more like watching paint dry or watching grass grow'),
        ];

        return phraseList;
    }
    /* randomly retrieve one phrase stores in 'phrases' array  */
    getRandomPhrase() {
        const randomPhraseSelected = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhraseSelected]
    }
    /* hides the start screen overlay */
    startGame() {
        overlay.style.display = 'none';
        overlay.className = 'start'
        /* sets property with chosen phrase */
        this.activePhrase = this.getRandomPhrase();
        /* adds that phrase to the board */
        this.activePhrase.addPhraseToDisplay();
    }
    /* checks to see if player has revealed all letters in active phrase */
    checkForWin() {
        const lettersNotGuessed = document.getElementsByClassName('hide');
        return lettersNotGuessed.length === 0;
    }
    /* method remove a life from scoreboard */
    removeLife() {
        /* replace image */
        let tries = document.getElementsByTagName('img');
        tries[this.missed].src = 'images/lostHeart.png';
        /* increments 'missed' property */
        this.missed ++;
            if (this.missed === 5) {
                this.gameOver(false);
            }
    }
    /* method displays original start screen depending on outcome of game */
    gameOver(gameWon) {
        let endOfGameMessage = document.querySelector('#game-over-message');
        overlay.style.display = 'inherit';
        /* updates the overlay with friendly win or loss message */
        if(gameWon) {
            endOfGameMessage.innerHTML = 'Congrats! You are a winner :)';
            overlay.className = 'win';
            } else {
                endOfGameMessage.innerHTML = 'Game Over. Try Again :(';
                overlay.className = 'lose';
        }

        this.resetGame();
    }
        /* controls most of the game logic */
    handleInteraction(button) {
        /* disable selected letter's onscreen button */
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.textContent)) {
            /* phrase includes guessed letter */
            /* add 'chosen' CSS class */
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            if (this.checkForWin()) {
                    this.gameOver(true);
            }
        } else {
            /* phrase does NOT include guessed letter */
            /* add 'wrong' CSS class */
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    resetGame() {
        const phraseUl = document.getElementById('phrase').firstElementChild;
        phraseUl.innerHTML = ``;

        const keys = document.querySelectorAll('.key');
        keys.forEach(button => button.className = 'key');
        keys.forEach(button => button.disabled = false);
    
        let lives = document.querySelectorAll('img');
        lives.forEach(life => life.src = 'images/liveHeart.png');

        this.missed = 0;
    }

    
    

}
