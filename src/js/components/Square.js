import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import SquareState from './SquareState';

const getGrid = (state) => {
  return {
    grid: state.game.grid
  };
};

  }
}

@connect(getGrid, null, null, {withRef: true})
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

    return (
      <div style={style}>
        <SquareState squareState={this.props.grid[col][row]}/>
      </div>
    );
  }
}
