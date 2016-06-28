import React from "react";
var Link = require("react-router").Link;
import { connect } from "react-redux";

import { setPlayer } from "../actions/Game";

@connect(null, {setPlayer}, null, {withRef: true})
export default class StartGame extends React.Component {
  render() {
    const setPlayer = this.props.setPlayer;
    
    const style = {
      marginTop: '5%',
      background: 'transparent'
    }

    const setPlayerNought = () => {
      setPlayer('o');
    }

    const setPlayerCross = () => {
      setPlayer('x');
    }

    return (
      <div style={style} class="row jumbotron text-center">
        <div class="col-sm-12">
          <h3>Player</h3>
        </div>
        
        <div class="col-md-offset-5 col-sm-1">
          <Link to="/play">
            <h1 onClick={setPlayerCross}>X</h1>
          </Link>
          </div>

        <div class="col-sm-1">
          <Link to="/play">
            <h1 onClick={setPlayerNought}>O</h1>
          </Link>
        </div>
      </div>
    )
  };
};