const initialState = {
  count: {
    won: 0,
    lost: 0,
    draw: 0,
    total: 0,
  },
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case 'GAME_WON':
      return Object.assign({}, state, {
        won: state.won + 1,
        total: state.total + 1,
      });
    case 'GAME_DRAW':
      return Object.assign({}, state, {
        draw: state.draw + 1,
        total: state.total + 1,
      });
    case 'GAME_LOST':
      return Object.assign({}, state, {
        draw: state.draw + 1,
        lost: state.lost + 1,
      });
    default:
      return state;
  };
};

export default history;
