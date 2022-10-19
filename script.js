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