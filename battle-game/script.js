// factory functions
// this acts as the creating of objects inside the function!
function Player(name, hp, str) {
  let attack = (player) => {
    let damage = Math.floor(Math.random() * str) + 1;
    //   logs the damage done by the player to another player
    message(`${name} Attack ${player.name} and does  ${damage} damage!`);
    //   logs their current health of the two players
    message(
      `${name} HP ${hp} | ${player.name} HP ${player.updateHp(damage)} \n`
    );
  };

  // update the player hp every attack
  let updateHp = (dmg) => {
    hp -= dmg;
    return hp;
  };

  return {
    name,
    hp,
    str,
    attack,
    updateHp,
  };
}

function startGame(player1, player2) {
  // create two objects
  player1 = Player("Jeremy", 100, 15);
  player2 = Player("Alcen", 100, 15);

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
  if (player1.hp > player2.hp)
    return message(`${player1.name} WINS the battle! `);

  //   if not player 2 has higher hp
  message(`${player2.name} WINS the battle!`);
}

// logs the message for better readability
function message(msg) {
  console.log(msg);
}

startGame();
