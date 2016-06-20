import React from 'react';
import _ from 'lodash';

import SquareState from './SquareState';


export default class Square extends React.Component {
  render() {
    const row = this.props.position.row;
    const col = this.props.position.col;
    const squareState = this.props.squareState;
    
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
      <div style={style} onClick={this.props.handleClick}>
        <SquareState squareState={squareState}/>
      </div>
    );
  }
}
