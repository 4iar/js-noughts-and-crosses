// TODO: make the PLAY_{USER,COMPUTER}_MOVE actions DRY

const initialState = {
  player: '',
  finished: false,
  winner: '',
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
      var row = action.position.row;
      var col = action.position.col;
      
      // ignore the play if the square is occupied
      if (state.grid[row][col]) {
        return state;
      }
      
      var newGrid = state.grid.slice();
      var newTurnsRemaining = state.turnsRemaining - 1;
      newGrid[row][col] = state.player;

      return Object.assign({}, state, {
        grid: newGrid,
        turnsRemaining: newTurnsRemaining});
    case 'PLAY_COMPUTER_MOVE':
      var row = action.position.row;
      var col = action.position.col;
      
      // ignore the play if the square is occupied
      if (state.grid[row][col]) {
        return state;
      }
      
      var newGrid = state.grid.slice();
      var newTurnsRemaining = state.turnsRemaining - 1;
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
    case 'END_GAME':
      return Object.assign({}, initialState, {
        finished: true,
        winner: action.winner
      });
    default:
      return state;
  };
};

export default game;
