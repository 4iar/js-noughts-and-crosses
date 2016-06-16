import React from 'react';
import _ from 'lodash';

import SquareState from './SquareState';


export default class Square extends React.Component {
  render() {
    const borderStyleCol = {
      '1': {borderLeft: 'none'},
      '2': {},
      '3': {borderRight: 'none'}
    };

    const borderStyleRow = {
      '1': {borderTop: 'none'},
      '2': {},
      '3': {borderBottom: 'none'}
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
        <SquareState />
      </div>
    );
  }
}
