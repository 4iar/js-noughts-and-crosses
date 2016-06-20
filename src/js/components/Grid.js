import React from "react";

import SquareLogic from '../containers/SquareLogic';


export default class Grid extends React.Component {
  render() {
    var style = {
      width: '450px',
      height: '450px',
      margin: '10% auto'
    };
    
    return (
      <div style={style}>
        <SquareLogic col='0' row='0'/>
        <SquareLogic col='1' row='0'/>
        <SquareLogic col='2' row='0'/>
        
        <SquareLogic col='0' row='1'/>
        <SquareLogic col='1' row='1'/>
        <SquareLogic col='2' row='1'/>
        
        <SquareLogic col='0' row='2'/>
        <SquareLogic col='1' row='2'/>
        <SquareLogic col='2' row='2'/>
      </div>
    );
  }
}
