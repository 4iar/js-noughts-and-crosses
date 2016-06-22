import React from "react";

import Stats from '../components/Stats';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Stats />
      </div>
    );
  }
}
