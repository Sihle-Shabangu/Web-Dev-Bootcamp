const dot1 = 'images/dice1.png';
const dot2 = 'images/dice2.png';
const dot3 = 'images/dice3.png';
const dot4 = 'images/dice4.png';
const dot5 = 'images/dice5.png';
const dot6 = 'images/dice6.png';
let die1;
let die2;
let winner = document.querySelector("h1");

function rollDice() {
    rndnumber1 = Math.floor(Math.random() * 6) + 1;
    rndnumber2 = Math.floor(Math.random() * 6) + 1;
    if (rndnumber1 == 1){
        die1 = dot1;
    } else if (rndnumber1 == 2){
        die1 = dot2;
    } else if (rndnumber1 == 3){
        die1 = dot3;
    } else if (rndnumber1 == 4){
        die1 = dot4;
    } else if (rndnumber1 == 5){
        die1 = dot5;
    } else if (rndnumber1 == 6){
        die1 = dot6;
    }

    if (rndnumber2 == 1){
        die2 = dot1;
    } else if (rndnumber2 == 2){
        die2 = dot2;
    } else if (rndnumber2 == 3){
        die2 = dot3;
    } else if (rndnumber2 == 4){
        die2 = dot4;
    } else if (rndnumber2 == 5){
        die2 = dot5;
    } else if (rndnumber2 == 6){
        die2 = dot6
    }
    let image1 = document.getElementById('img1');
    let image2 = document.getElementById('img2');
    image1.src = die1;
    image2.src = die2;
    if (rndnumber1 > rndnumber2){
        winner.textContent = "🚩Player1 Wins!"
    }else if (rndnumber1 < rndnumber2){
        winner.textContent = "Player2 Wins! 🚩"
    } else{
        winner.textContent = "Draw"
    }
    console.log(rndnumber1, rndnumber2)
}