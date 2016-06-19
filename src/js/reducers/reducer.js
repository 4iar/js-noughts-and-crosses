const initialState = {
  player: 'x',
  grid:
    [['', '', ''],
      ['', '', ''],
      ['', '', '']]
};

export const game = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_MOVE':
      var newGrid = state.grid.slice();
      var row = action.position.row;
      var col = action.position.col;
      newGrid[row][col] = state.player;
      
      return Object.assign({}, state, {
        grid: newGrid});
    case 'SET_PLAYER':
      return Object.assign({}, state, {
        player: action.player
      })
    default:
      return state;
  };
};
