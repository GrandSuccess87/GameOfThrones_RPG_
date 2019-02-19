// Executes code when DOM has fully loaded
$(document).ready(function() {


// Create the character object to hold the characters data
const characters = {
	"John_Snow": {
		name: "John Snow",
		healthPoints: 222, 
		attack: 10, 
		image: "assets/images/john_snow.jpg",
		enemyAttackBack: 15
	},

	"Arya_Stark": {
		name: "Arya Stark",
		healthPoints: 333, 
		attack: 15, 
		image: "assets/images/arya_stark.jpg",
		enemyAttackBack: 10
	},

	"Grey_Worm": {
		name: "Grey Worm",
		healthPoints: 445, 
		attack: 20, 
		image: "assets/images/Grey_Worm.jpg",
		enemyAttackBack: 8
	},
	
	"Danny_T": {
		name: "Daenerys Targaryen",
		healthPoints: 225, 
		attack: 28, 
		image: "assets/images/d_t.jpg",
		enemyAttackBack: 16
	}
};

// Create a function that creates the character cards
function createCharacterCard (character, cardArea) {
	// Create a div for each character's card containing name, healthPoints, and image.
	const $characterDiv = $("<div>", {"class": "characters"});
	$characterDiv.attr("data-name", character.name);
	const $characterName = $("<p>");
	$characterName.attr("class", "characterName");
	$characterName.text(character.name);
	const $characterImage = $("<img>");
	$characterImage.attr("class", "characterImage");
	$characterImage.attr("src", character.image);
	const $characterHealthPoints = $("<p>");
	$characterHealthPoints.attr("class", "characterHealthPoints");
	$characterHealthPoints.text(character.healthPoints);
	$characterDiv.append($characterName).append($characterHealthPoints).append($characterImage);
	$(cardArea).append($characterDiv);
}

function createCharacter () {
	for(var key in characters) {
		console.log(characters[key]);
		createCharacterCard(characters[key], "#characterArea");
	}
}

createCharacter();

// Now I need to declare my variables and create an onclick event for the character cards so that the selected character remains and the rest gets pushed into an array and appends to the 'enemies to attack' div. 
let yourCharacter;
const enemies = [];
let defender; // this is the opponent
// const healthPoints;
// const enemyAttackBackPoints;


function setCharacterSelection (enemyArray) {
	console.log("setCharacterSelection function!");
	enemyArray.forEach(function(enemyCard) {
		console.log("move the enemies!");
		console.log(enemyCard);
		createCharacterCard(enemyArray, "#enemyArea");
		console.log("enemies moved!");
		$("#header-text").text("Your Character");		
	})
};


$("#characterArea").on("click", ".characters", function() {
	console.log("character selected...");
	// Stores clicked character's name
	const name = $(this).attr("data-name");
	console.log(name);
	// Runs if your player has not been selected
	if(!yourCharacter) {

		yourCharacter = name;
		console.log(`Your character is ${yourCharacter}`);

		for(var key in characters) {


			if(characters[key].name !== name)
				enemies.push(characters[key]);
				console.log(`enemies ${enemies}`);
		}
	}
	setCharacterSelection(enemies);
});



// Likewise I need to create another onclick event for the characters that are in the 'enemies to attack div' and when one is selected it appends to the 'defender' div and the rest remain in the 'enemies to attack' div.





});


// var $div = $("<div>", {id: "foo", "class": "a"});
// $div.click(function(){ /* ... */ });
// $("#box").append($div);