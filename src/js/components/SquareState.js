import React from 'react';


export default class SquareState extends React.Component {
  render() {
    var style = {
      /*Plonk the naught or cross in the middle of the square*/
      position: 'relative',
      top: '42%',
      transform: 'translateY(-50%)',
      textAlign: 'center',

      /*TODO: Make it pretty*/
      fontSize: '5em'
    };

    return (
      <div style={style}>
       X 
      </div>
    );
  }
}
