// TODO: 1.0 Check if action is valid -- if it is the players turn
// TODO: 1.1 Send off the PLAY_MOVE if appropriate

// TODO: 2.0 Check to see if there is a winner on the grid
// TODO: 2.1 Call RESULT_{DRAW,WIN,LOSE} appropriately

// TODO: 3.0 Calculate the AI move and check if winner
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import Grid from '../components/Grid';
import { playMove } from '../actions/Game';

const getGrid = (state) => {
  return {
    grid: state.game.grid
  };
};

@connect(getGrid, null, null, {withRef: true})
export default class GameLogic extends React.Component {
  render() {
    return (
      <Grid />
    );
  }
}
