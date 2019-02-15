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

const fruits = {
		apple: 28, 
		orange: 17, 
		pear: 54
};


const fruitEntry = Object.entries(fruits);
console.log(fruitEntry);
for(const [fruit, count] of fruitEntry) {
	console.log(`There are ${count} ${fruit}s`);
}

console.log(characters);
console.log(characters.John_Snow.name);
console.log(characters.John_Snow.healthPoints);
console.log(characters.John_Snow.attack);
console.log(characters.John_Snow.image);
console.log(characters.John_Snow.enemyAttackBack);



// // Create a function that creates the character cards

function setCharacter (character, cardArea) {
	console.log(function setCharacter());
const charEntry = Object.entries(characters);
console.log(charEntry);
for(const [character, fightData] of charEntry) {
	console.log(`Fight Data ${fightData} for ${character}`);
}

	const $characterDiv = $("<div>", {"class": "characters"});
	const $characterName = $("<p>");
	$characterName.setAttribute("class", "characterName");
	$characterName.text(character.name);
	const $characterHealthPoints = $("<p>", {"class": "characterHealthPoints"});
	$characterHealthPoints.text(character.healthPoints);
	const $characterImage = $("<img>", {"class": "characterImage"});
	$characterImage.setAttribute("src", character.image);

}


});
