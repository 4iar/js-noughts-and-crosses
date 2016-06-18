import * from './actions';

const initialState = {
  grid = {},
  position = {}
}

function movesReducer(state = initialState, action) {
  switch (action.type) {
    case 'PLAY_MOVE':
      return Object.assign({}, state, {
        position:'fuck'})
    default:
      return state
  }
};