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
      fontSize: '5em',
      fontFamily: 'Raleway',

      userSelect: 'none',
      MozUserSelect: 'none',    /* Firefox all */
      msUserSelect: 'none',     /* IE 10+ */
      WebkitUserSelect: 'none',
    };

    const playerCharacters = {
      '': '\u00a0',  // hacky way to stop empty chars from breaking the grid
      'x': 'x',
      'o': 'o'
    };

    return (
      <div style={style}>
        {playerCharacters[this.props.state]}
      </div>
    );
  }
}
