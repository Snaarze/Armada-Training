function Character(name) {
  return {
    name,
    health: 100,
    str: 20,
    // iife to add class randomly after the class is created
    class: (function () {
      let availableClass = ["Mage", "Archer", "Healer", "Assassins"];
      //   return the class depending on the generated number of the function
      return availableClass[generateRandomNumber(availableClass.length - 1, 1)];
    })(),
    randomizeHealth: function () {
      // generate random health between 50 to 150
      return (this.health = generateRandomNumber(100, 50));
    },
    specialAbility: (function () {
      // available skills within the character
      let specialAbilitySkils = [
        "Fireball",
        "Healing Touch",
        "Lightning Strike",
        "Power Slash",
      ];

      //   generate random skills based on the generated number
      return specialAbilitySkils[
        generateRandomNumber(specialAbilitySkils.length - 1, 1)
      ];
    })(),
    battle: function (player) {
      // generate random number start from 5 to 20
      let damage = generateRandomNumber(this.str, 5);
      //   logs the attacker name and damage dealt
      return console.log(
        `Character ${this.name} Attacked Character ${player.name} with ${
          this.specialAbility
        }. ${player.name}'s health dropped from ${
          player.health
        } to ${player.receivedDamage(damage)} `
      );
    },
    // reduce the player hp
    receivedDamage: function (dmg) {
      return (this.health = this.health - dmg);
    },
  };
}
// this function generate random numbers dynamically
function generateRandomNumber(num, defaultValue) {
  return Math.floor(Math.random() * num) + defaultValue;
}

// create a character dynamically or set specifically
function generateRandomCharacter(name) {
  // available names
  let availableNames = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
  //   create new object every time function is called
  //   if name is valid set the name otherwise set randomly
  const newCharacter = new Character(
    name
      ? name
      : availableNames[generateRandomNumber(availableNames.length - 1, 0)]
  );
  //   change the health
  newCharacter.randomizeHealth();
  // return the newly created character
  return newCharacter;
}
// random name
const randomCharacter = generateRandomCharacter();

// set specifically
const namedCharacter = generateRandomCharacter("Jeremy");

// logs the two character
console.log(randomCharacter);
console.log(namedCharacter);

// attack character two times vice-versa
randomCharacter.battle(namedCharacter);
namedCharacter.battle(randomCharacter);
randomCharacter.battle(namedCharacter);
namedCharacter.battle(randomCharacter);

// create character randomly and dynamically
function generateMultipleCharacters(numOfPlayers) {
  // player list holder
  let players = [];
  // loop until the condition is met
  for (let i = 0; i <= numOfPlayers; i++) {
    // create new character per loop
    let newCharacter = generateRandomCharacter();
    // push the players to array
    players.push(newCharacter);
  }

  //   return list of players
  return players;
}

const party = generateMultipleCharacters(5);
console.dir(party); // Logs an array of 5 different characters
