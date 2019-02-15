// Executes code when DOM has fully loaded
$(document).ready(function() {


// Create the character object to hold the characters data
const characters = {
	"John_Snow": {
		name: "John Snow",
		healthPoints: 222, 
		attack: 10, 
		image: "assets/images/john_snow_.jpg",
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
// console.log(setCharacter());
	// Create a div for each character's card containing name, healthPoints, and image.
	const $characterDiv = $("<div>", {"class": "characters"});
	const $characterName = $("<p>");
	$characterName.attr("class", "characterName");
	$characterName.text(character.name);
	const $characterHealthPoints = $("<p>");
	$characterHealthPoints.attr("class", "characterHealthPoints");
	$characterHealthPoints.text(character.healthPoints);
	const $characterImage = $("<img>");
	$characterImage.attr("class", "characterImage");
	$characterImage.attr("src", character.image);
	$characterDiv.append($characterName).append($characterHealthPoints).append($characterImage);
	$(cardArea).append($characterDiv);
}

function setCharacter () {
	for(var key in characters) {
		console.log(characters[key]);
		createCharacterCard(characters[key], "#characterArea");
	}
	// const charEntry = Object.entries(characters);
	// console.log(charEntry);
	// for(const [character, fightData] of charEntry) {
	// 	console.log(`Fight Data ${fightData} for ${character}`);
	// }
}

setCharacter();

});


// var $div = $("<div>", {id: "foo", "class": "a"});
// $div.click(function(){ /* ... */ });
// $("#box").append($div);