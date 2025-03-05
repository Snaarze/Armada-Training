// this acts as the creating of objects inside the function
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
      this.hp -= dmg;
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
    if (player2.hp < 1) break;
    player2.attack(player1);
    // check if player 1 is still vaid
    if (player1.hp < 1) break;
    //  change round by 1
    roundCounter++;
  }

  // check if player 2 is still vaid
  if (player1.hp > player2.hp)
    return message(`${player1.name} WINS the battle! `);
  else if (player2.hp > player1.hp)
    return message(`${player2.name} WINS the battle!`);
  //   return draw if both player has the same hp!
  else return message(`Draw!`);
}

// logs the message for better readability
function message(msg) {
  console.log(msg);
}

startGame();
