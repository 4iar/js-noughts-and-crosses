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