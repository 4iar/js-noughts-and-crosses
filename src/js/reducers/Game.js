const initialState = {
  player: '',
  playerTurn: true,
  turnsRemaining: 9,
  grid:
    [['', '', ''],
      ['', '', ''],
      ['', '', '']]
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_USER_MOVE':
      var newGrid = state.grid.slice();
      var newTurnsRemaining = state.turnsRemaining - 1;
      var row = action.position.row;
      var col = action.position.col;
      newGrid[row][col] = state.player;

      return Object.assign({}, state, {
        grid: newGrid,
        turnsRemaining: newTurnsRemaining});
    case 'PLAY_COMPUTER_MOVE':
      var newGrid = state.grid.slice();
      var newTurnsRemaining = state.turnsRemaining - 1;
      var row = action.position.row;
      var col = action.position.col;
      newGrid[row][col] = {o: 'x', x: 'o'}[state.player];

      return Object.assign({}, state, {
        grid: newGrid,
        turnsRemaining: newTurnsRemaining});
    case 'SET_PLAYER':
      return Object.assign({}, state, {
        player: action.player
      });
    case 'START_TURN':
      return Object.assign({}, state, {
        playerTurn: true
      });
    case 'END_TURN':
      return Object.assign({}, state, {
        playerTurn: false
      });
    default:
      return state;
  };
};

export default game;
