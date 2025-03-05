// Hi mentors! i hope you understand that this version was done differently than the instruction should be. i am currently practicing the objects/classes for better
// readability, thank you for understanding! i hope this would not be flagged as ai generated.

// factory functions
// this acts as the creating of objects inside the function!
function Player(name, str) {
  return {
    name,
    hp: 100,
    str,
    attack: function (player) {
      let damage = Math.floor(Math.random() * str);
      //   logs the damage done by the player to another player
      message(`${this.name} Attack ${player.name} and does  ${damage} damage!`);
      //   logs their current health of the two players
      message(
        `${this.name} HP ${this.hp} | ${player.name} HP ${player.deductHp(
          damage
        )} \n`
      );
    },
    // remove hp with the damage received
    deductHp: function (dmg) {
      if (this.hp < dmg) {
        return (this.hp = 0);
      }
      this.hp = this.hp - dmg;
      return this.hp;
    },
  };
}

function startGame(player1, player2) {
  // create two objects
  player1 = Player("Jeremy", 15);
  player2 = Player("Alcen", 15);

  //   round variable
  let roundCounter = 0;

  while (roundCounter < 10) {
    // logs the start of the game!
    message(`=== Round ${roundCounter + 1} Start! ===`);

    // both players attack
    player1.attack(player2);
    // check if player 2 is still vaid
    if (player2.hp < 1 || (player1.hp > player2.hp && roundCounter === 9)) {
      message(`${player1.name} WINS the battle! `);
      break;
    }
    player2.attack(player1);
    // check if player 1 is still vaid
    if (player1.hp < 1 || (player2.hp > player1.hp && roundCounter === 9)) {
      message(`${player2.name} WINS the battle!`);
      break;
    }
    //  change round by 1
    roundCounter++;
  }

  //   return draw if both player has the same hp!
  if (player1.hp === player2.hp) return message(`Draw!`);
}

// logs the message for better readability
function message(msg) {
  console.log(msg);
}

startGame();
