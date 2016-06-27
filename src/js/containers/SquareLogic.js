// TODO: 1.0 Check if action is valid -- if it is the players turn
// TODO: 1.1 Send off the PLAY_MOVE if appropriate

// TODO: 2.0 Check to see if there is a winner on the grid
// TODO: 2.1 Call RESULT_{DRAW,WIN,LOSE} appropriately

// TODO: 3.0 Calculate the AI move and check if winnerimport React from 'react';
import React from 'react';
import { connect } from 'react-redux';

import checkIfWinner from '../checkIfWinner';
import computeNextMove from '../computeNextMove';
import Square from '../components/Square';
import { playUserMove, playComputerMove, startTurn, endTurn } from '../actions/Game';

const getGrid = (state) => {
  return {
    game: state.game
  };
};

@connect(getGrid, {playUserMove, playComputerMove, startTurn, endTurn}, null, {withRef: true})
export default class SquareLogic extends React.Component {
  render() {
    const row = this.props.row;
    const col = this.props.col;
    const position = {row, col};
    const grid = this.props.game.grid;
    const squareState = grid[row][col];
    const playUserMove = this.props.playUserMove;
    const playComputerMove = this.props.playComputerMove;
    const turnsRemaining = this.props.game.turnsRemaining;
    const isPlayerTurn = this.props.game.playerTurn;

    const squareNotOccupied = () => {
      return !squareState;
    };

    const isValidMove = () => {
      return squareNotOccupied() && isPlayerTurn;
    };
    
    const playComputerTurn = () => {
      // call ai logic
      // TODO: handle invalid moves? invalid moves cause the thing to decrement :(
      playComputerMove(computeNextMove(grid));
    };
    
    const checkAndHandleGameEnd = () => {
      
      
      if (turnsRemaining === 0) {
        return;
      };
      
      if (checkIfWinner(grid)) {
      };
    };

    const handleClick = () => {
      if (!isValidMove) {
        return;
      };

      playUserMove(position);
      endTurn();

      if (turnsRemaining >= 2) {
        playComputerTurn();
      };

      checkAndHandleGameEnd();
    };

    return (
      <Square handleClick={handleClick} position={position} squareState={squareState}/>
    );
  }
}