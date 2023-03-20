function randomNumber1() {
    return Math.floor(Math.random() * 6 + 1);
}

function tossDice() {
    document.querySelector(".img1").setAttribute('src', `images/dice${randomNumber1()}.png`);
    document.querySelector(".img2").setAttribute('src', `images/dice${randomNumber1()}.png`);
}

function checkWhoWon() { 
    const player1 = parseInt(document.querySelector(".img1").getAttribute("src")[11])
    const player2 = parseInt(document.querySelector(".img2").getAttribute("src")[11])

    var result = ''

    if (player1 > player2) {
        result = 'Player 1 Wins!'
    }
    else if (player2 > player1) {
        result = 'Player 2 Wins!'
    }
    else{
        result = 'Draw!'
    }

    document.querySelector('#result-announcement').innerHTML = result
}

tossDice();
checkWhoWon();

