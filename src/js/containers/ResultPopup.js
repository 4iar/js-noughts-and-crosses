import React from 'react';
import Popup from '../components/ResultPopup';

import { connect } from "react-redux";

const getGameVariables = (state) => {
  const result = (state) => {
    console.log(state);
    if (!state.game.player) {
      return 'draw';
    } 
    
    if (state.game.player === state.game.winner) {
      return 'win';
    } else {
      return 'lose';
    }
  };
  
  return {
    finished: state.game.finished,
    result: result(state)
  };
};

@connect(getGameVariables, null, null, {withRef: true})
export default class ResultPopup extends React.Component {

  messages = {
    win: "Win",
    draw: "Draw",
    lose: "Lose",
  }
  
  getMessage() {
    return this.messages[this.props.result]
  }

  render() {
    return (
      <Popup
        gameFinished={this.props.finished}
        message={this.getMessage()}
      />
    )
  };
};

