import React from 'react';
import _ from 'lodash';

import SquareState from './SquareState';


export default class Square extends React.Component {
  render() {
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

    _.merge(style, borderStyleCol[this.props.row]);
    _.merge(style, borderStyleRow[this.props.col]);

    return (
      <div style={style}>
        <SquareState state={this.props.grid[this.props.row][this.props.col]}/>
      </div>
    );
  }
}
