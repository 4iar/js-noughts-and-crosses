export default function playMove(move) {
  return {
    type: 'PLAY_MOVE',
    move: move  // {player: 'x', position: {row: '0', col: '1'}}
  }
}