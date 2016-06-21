import React from "react";

import GameLogic from '../containers/GameLogic';
import Stats from '../components/Stats';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <GameLogic />
        <Stats />
      </div>
    );
  }
}
