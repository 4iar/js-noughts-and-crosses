export function playMove(position) {
  return {
    type: 'PLAY_MOVE',
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
