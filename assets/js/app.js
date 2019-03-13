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

/**
 * [description]
 * @return {[type]} [description]
 */
const character = (function(){
	/**
	 * [createCharacter description]
	 * @return {[type]} [description]
	 */
	function createCharacter() {
		for(var key in characters) {
			console.log(characters[key]);
			createCharacterCard(characters[key], "#characterArea");
		}
	};
	/**
	 * [createCharacterCard description]
	 * @param  {String} character [description]
	 * @param  {String} cardArea  [description]
	 * @return {[type]}           [description]
	 */
	function createCharacterCard(character, cardArea){
		// Create a div for each character's card containing name, healthPoints, and image.
		const $characterDiv = $("<div>", {"class": "characters"})
		.attr("data-name", character.name);
		const $characterName = $("<p>")
		.attr("class", "characterName")
		.text(character.name);
		const $characterImage = $("<img>")
		.attr("class", "characterImage")
		.attr("src", character.image);
		const $characterHealthPoints = $("<p>")
		.attr("class", "characterHealthPoints")
		.text(character.healthPoints);

		$characterDiv
		.append($characterName)
		.append($characterHealthPoints)
		.append($characterImage);

		$(cardArea).append($characterDiv);
	};

	/**
	 * [setCharacterSelection description]
	 * @param {[type]} enemyArray [description]
	 */
	function setCharacterSelection (enemyArray) {
		console.log("setCharacterSelection function!");
		enemyArray.forEach(function(enemyCard) {
			console.log("move the enemies!");
			console.log(enemyCard);
			createCharacterCard(enemyCard, "#enemyArea");
			console.log("enemies moved!");
			$("#header-text").text("Your Character");
		})
	};
	/**
	 * [init description]
	 * @return {[type]} [description]
	 */
	function init() {
		createCharacter();
	};

	return {
		createCharacter,
		createCharacterCard,
		defender: '',
		enemies : [],
		init,
		setCharacterSelection,
		yourCharacter: ''
	}

}())


// Executes code when DOM has fully loaded
$(document).ready(function() {
	character.init()

// Create the character object to hold the characters data

$("#characterArea").on("click", ".characters", function() {
	console.log("character selected...");
	// Stores clicked character's name
	const name = $(this).attr("data-name");
	console.log(name);
	// Runs if your player has not been selected
	if(!character.yourCharacter) {

		character.yourCharacter = name;
		console.log(`Your character is ${character.yourCharacter}`);

		for(var key in characters) {


			if(characters[key].name !== name)
				character.enemies.push(characters[key]);
				console.log(`enemies ${character.enemies}`);
		}
	}
	character.setCharacterSelection(character.enemies);
});


});


// var $div = $("<div>", {id: "foo", "class": "a"});
// $div.click(function(){ /* ... */ });
// $("#box").append($div);
