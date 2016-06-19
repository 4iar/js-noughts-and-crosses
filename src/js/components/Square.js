import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import SquareState from './SquareState';
import playMove from '../actions/playMove';

const getGrid = (state) => {
  return {
    grid: state.game.grid
  };
};

@connect(getGrid, {playMove}, null, {withRef: true})
export default class Square extends React.Component {
  render() {
    const row = this.props.row;
    const col = this.props.col;
    
    const borderStyleCol = {
      '0': {borderLeft: 'none'},
      '1': {},
      '2': {borderRight: 'none'}
    };

    const borderStyleRow = {
      '0': {borderTop: 'none'},
      '1': {},
      '2': {borderBottom: 'none'}
    };

    var style = {
      display: 'inline-block',

      width: 'calc(100% / 3)',
      height: 'calc(100% / 3)',

      border: 'solid',
      boxSizing: 'border-box',
    };

    _.merge(style, borderStyleCol[col]);
    _.merge(style, borderStyleRow[row]);

    const move = {player: 'x', position: {row, col}};
    
    return (
      <div style={style} onClick={this.props.playMove.bind(this, move)}>
        <SquareState squareState={this.props.grid[row][col]}/>
      </div>
    );
  }
}
