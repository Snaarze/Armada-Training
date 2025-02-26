// Hi mentors! i hope you understand that this version was done differently than the instruction should be. i am currently practicing the objects/classes for better
// readability, thank you for understanding! i hope this would not be flagged as ai generated.

// factory functions
// this acts as the creating of objects inside the function!
function Player(name, str) {
  this.name = name;
  this.strength = str;

  return {
    name,
    hp: 100,
    str,
    attack: function (player) {
      let damage = Math.floor(Math.random() * str) + 1;
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
      this.hp = this.hp - dmg;
      return this.hp;
    },
  };
}

function startGame(player1, player2) {
  // create two objects
  player1 = new Player("Jeremy", 10);
  player2 = new Player("Alcen", 10);
  //   round variable
  let roundCounter = 0;

  while (roundCounter < 10) {
    // logs the start of the game!
    message(`=== Round ${roundCounter + 1} Start! ===`);

    // both players attack
    player1.attack(player2);
    player2.attack(player1);

    //  change round by 1
    roundCounter++;
  }

  //   return draw if both player has the same hp!
  if (player1.hp === player2.hp) return message(`Draw!`);

  //   checks if player1 has higher hp
  if (player1.hp > player2.hp) return message(` You won! ${player1.name} `);

  //   if not player 2 has higher hp
  message(`You won! ${player2.name}`);
}

// logs the message for better readability
function message(msg) {
  console.log(msg);
}

startGame();
