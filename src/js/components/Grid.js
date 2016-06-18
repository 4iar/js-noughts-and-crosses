import React from "react";

import Square from './Square.js';


export default class Grid extends React.Component {
  render() {
    var style = {
      width: '450px',
      height: '450px',
      margin: '10% auto'
    };

    return (
      <div style={style}>
        <Square row='0' col='0'/>
        <Square row='1' col='0'/>
        <Square row='2' col='0'/>
        
        <Square row='0' col='1'/>
        <Square row='1' col='1'/>
        <Square row='2' col='1'/>
        
        <Square row='0' col='2'/>
        <Square row='1' col='2'/>
        <Square row='2' col='2'/>
      </div>
    );
  }
}
