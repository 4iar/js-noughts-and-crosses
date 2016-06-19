const initialState = {
  grid:
    [['', '', ''],
      ['', '', ''],
      ['', '', '']]
};

export const movesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_MOVE':
      var newGrid = state.grid.slice();
      var row = action.move.position.row;
      var col = action.move.position.col;
      newGrid[row][col] = action.move.player;
      
      return Object.assign({}, state, {
        grid: newGrid});
    default:
      return state;
  };
};
