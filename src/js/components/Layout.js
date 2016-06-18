import React from "react";

import Grid from './Grid.js';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Grid grid={[['x', 'x', 'x'], ['o', 'o', 'o'], ['', '', '']]}/>
      </div>
    );
  }
}
