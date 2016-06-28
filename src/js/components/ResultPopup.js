import React from 'react';
import {SkyLightStateless} from 'react-skylight';


export default class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClosed: false
    };
  }

  closeModal() {
    console.log(this.state.modalClosed);
    this.setState({modalClosed: true});
  };

  render() {
    const center = {
      textAlign: 'center',
      fontSize: '22em'
    }

    const style = {
      width: '50%',
      height: '100px',
      position: 'fixed',
      top: '50%',
      left: '50%',
      marginTop: '-300px',
      marginLeft: '-25%',
      backgroundColor: 'rgba(0,0,0,0)',
      borderRadius: '2px',
      zIndex: 90,
      padding: '15px',
      boxShadow: ''
    };

    return (
      <div>
        <SkyLightStateless
          dialogStyles={style}
          isVisible={this.props.gameFinished && !this.state.modalClosed}
          onOverlayClicked={this.closeModal.bind(this)}
          onCloseClicked={this.closeModal.bind(this)}
          >
          <h1 style={center}>{this.props.message}</h1>
          </SkyLightStateless>
      </div>
    )
  };
};
