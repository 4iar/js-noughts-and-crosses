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
      ['', '', '']],
  stats: {
    win: 0,
    draw: 0,
    lose: 0
  }
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
    case 'RESET_GAME':
      return Object.assign({}, state, {
        finished: false,
        winner: '',
        playerTurn: true,
        turnsRemaining: 9,
        grid:
          [['', '', ''],
            ['', '', ''],
            ['', '', '']],
        player: state.player
      });
    case 'END_GAME':
      var newState = Object.assign({}, state, {
        finished: true,
        winner: action.winner,
      })
      
      if (!action.winner) {
        newState.stats.draw = state.stats.draw + 1;
      } else {
        if (action.winner === state.player) {
          newState.stats.win = state.stats.win + 1;
        } else {
          newState.stats.lose = state.stats.lose + 1;
        };
      };
      return newState;
    default:
      return state;
  };
};

export default game;
