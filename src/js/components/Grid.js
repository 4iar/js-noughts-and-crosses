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
        <Square row='0' col='0' grid={this.props.grid}/>
        <Square row='1' col='0' grid={this.props.grid}/>
        <Square row='2' col='0' grid={this.props.grid}/>
        
        <Square row='0' col='1' grid={this.props.grid}/>
        <Square row='1' col='1' grid={this.props.grid}/>
        <Square row='2' col='1' grid={this.props.grid}/>
        
        <Square row='0' col='2' grid={this.props.grid}/>
        <Square row='1' col='2' grid={this.props.grid}/>
        <Square row='2' col='2' grid={this.props.grid}/>
      </div>
    );
  }
}
