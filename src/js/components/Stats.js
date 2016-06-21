import React from "react";
import { connect } from 'react-redux';

const getHistory = (state) => {
  return {
    count: state.history.count
  };
};

@connect(getHistory, null, null, {withRef: true})
export default class Stats extends React.Component {
  render() {
    const count = this.props.count;
    
    var style = {
      textAlign: 'center',
      
      fontSize: '3em',
      fontFamily: 'Raleway',
    };

    return (
      <div style={style}>
        <p>{count.won} - {count.draw} - {count.lost}</p>
      </div>
    );
  };
};