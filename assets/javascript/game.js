$(document).ready(function () {
});

// generate random number between 19-120
var randomNumber = Math.floor((Math.random() * 120) + 19);
console.log(randomNumber); // test 

var x = Math.floor((Math.random() * 10) + 1);


$('#randomNumber').text(randomNumber);

// variables
var playerTotal = 0;
var wins = 0;
var losses = 0;

// Random number between 1 - 12
var blue = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);
var pink = Math.floor((
    Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);

$('#wins').text(wins);
$('#losses').text(losses);

//resets the game
function reset() {
    randomNumber = Math.floor(Math.random() * 121 + 19);
    console.log(randomNumber) // test
    $('#randomNumber').text(randomNumber);
    blue = Math.floor(Math.random() * 13 + 1);
    yellow = Math.floor(Math.random() * 13 + 1);
    pink = Math.floor(Math.random() * 13 + 1);
    green = Math.floor(Math.random() * 13 + 1);
    yourScore = 0;
    $('#finalTotal').text(playerTotal);
}

//adds the wins to the score
function win() {
    alert("You won!");
    wins++;
    $('#wins').text(wins);
    reset();
}

//adds the losses to the score
function loss() {
    alert("You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
}

// Generate a value for blue crystal
$('.blue').on('click', function () {
    playerTotal = playerTotal + blue;
    console.log("blue = " + playerTotal); // test
    $('#finalTotal').text(playerTotal);
    //sets win/lose conditions
    if (playerTotal == randomNumber) {
        win();
    }
    else if (playerTotal > randomNumber) {
        loss();
    }
})

// Generate a value for yellow crystal
$('.yellow').on('click', function () {
    playerTotal = playerTotal + yellow;
    console.log("yellow = " + playerTotal); // test
    $('#finalTotal').text(playerTotal);
    if (playerTotal == randomNumber) {
        win();
    }
    else if (playerTotal > randomNumber) {
        loss();
    }
})

// Generate a value for pink crystal
$('.pink').on('click', function () {
    playerTotal = playerTotal + pink;
    console.log("pink = " + playerTotal); // test
    $('#finalTotal').text(playerTotal);
    //sets win/lose conditions
    if (playerTotal == randomNumber) {
        win();
    }
    else if (playerTotal > randomNumber) {
        loss();
    }
})

// Generate a value for green crystal
$('.green').on('click', function () {
    playerTotal = playerTotal + green;
    console.log("green = " + playerTotal); // test
    $('#finalTotal').text(playerTotal);

    if (playerTotal == randomNumber) {
        win();
    }
    else if (playerTotal > randomNumber) {
        loss();
    }
});  