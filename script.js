console.log('she pointed to her boobies..... oh my god she did')
// creating list of possible words
var words = [
    "plasma",
    "Water",
    "Earth",
    "Wind",
    "Fire",
    "Captain",
    "Planet",
    "Hugo",
    "Carnivore",
    "Herbivore",
    "Alphabet",
    "Modular",
    "Vortex",
    "Meditate",
    "Dilly"
];

// need to use math.floor and math.random to pick a random word
var word = words[Math.floor(Math.random() * words.length)];

// create empty array for user input answers
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainderLetters  = word.length;

// need while loop for the game flow. 
while (remainderLetters > 0) {
// keep track of player progress with alert
// retrieve player guess
// update game from most recent guess 
var guess = prompt("Guess a letter or click cancel to stop game.");
if (guess == null) {
    break;
} else if (guess.length !== 1) {
    alert("Please enter a valid letter")
} else //update with users guess
for (var i = 0; i < word.length; i++) {
    if (word[i] === guess) {
        answerArray[i] = guess; remainderLetters--;
        }
}
}