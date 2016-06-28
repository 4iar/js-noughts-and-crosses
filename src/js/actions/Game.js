export function playUserMove(position) {
  return {
    type: 'PLAY_USER_MOVE',
    position // {row: '0', col: '1'}
  }
}

export function playComputerMove(position) {
  return {
    type: 'PLAY_COMPUTER_MOVE',
    position // {row: '0', col: '1'}
  }
}

export function setPlayer(player) {
  return {
    type: 'SET_PLAYER',
    player
  }
}

export function startTurn() {
  return {
    type: 'START_TURN',
    playerTurn: true
  }
}

export function endTurn() {
  return {
    type: 'END_TURN',
    playerTurn: false
  }
}

export function resetGame() {
  return {
    type: 'RESET_GAME'
  };
};

export function endGame(winner) {
  return {
    type: 'END_GAME',
    finished: true,
    winner
  }
}
