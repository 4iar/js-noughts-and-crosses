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
        <Square col='0' row='0'/>
        <Square col='1' row='0'/>
        <Square col='2' row='0'/>
        
        <Square col='0' row='1'/>
        <Square col='1' row='1'/>
        <Square col='2' row='1'/>
        
        <Square col='0' row='2'/>
        <Square col='1' row='2'/>
        <Square col='2' row='2'/>
      </div>
    );
  }
}
