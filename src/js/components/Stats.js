import React from "react";
import { connect } from 'react-redux';

const getStats = (state) => {
  return {
    win: state.game.stats.win,
    draw: state.game.stats.draw,
    lose: state.game.stats.lose
  };
};

@connect(getStats, null, null, {withRef: true})
export default class Stats extends React.Component {
  render() {
    const win = this.props.win;
    const draw = this.props.draw;
    const lose = this.props.lose;
    
    var style = {
      fontSize: '3em',
      fontFamily: 'Raleway',
    };

    return (
      <div style={style} class='col-sm-6 col-sm-offset-3 text-center'>
        <p>{win} - {draw} - {lose}</p>
      </div>
    );
  };
};