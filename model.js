// Holds all the variables.

var bank = ["pretzel", "pears", "cashews", "chocolate", "cereal", "scone", "cake", "pie", "noodle", "pierogi", "tattoo", "electricity"];

var definitions = [
"a crisp biscuit baked in the form of a knot or stick and flavored with salt",
"a yellowish- or brownish-green edible fruit that is typically narrow at the stalk and wider toward the base, with sweet, slightly gritty flesh",
"an edible kidney-shaped nut, rich in oil and protein", 
"a food preparation in the form of a paste or solid block made from roasted and ground cacao seeds, typically sweetened", 
"a grain used for food, such as wheat, oats, or corn", 
"a small unsweetened or lightly sweetened biscuitlike cake made from flour, fat, and milk and sometimes having added fruit",
"an item of soft, sweet food made from a mixture of flour, shortening, eggs, sugar, and other ingredients, baked and often decorated", 
"a baked dish of fruit, or meat and vegetables", 
"a strip, ring, or tube of pasta or a similar dough, typically made with egg and usually eaten with a sauce or in a soup", 
"a dough dumpling stuffed with a filling such as potato or cheese, typically served with onions or sour cream",
"a form of body modification where a design is made by inserting ink", 
"the set of physical phenomena associated with the presence and motion of electric charge"
];

const attempts = 7;

var guessesLeft = 0;

var lettersGuessed = [];

var currentWord = [];

var currentWordSelection;

var currentScore = 0;

var definition;

var message;

var table = []
