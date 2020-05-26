import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor() {
    super();
    this.state = { originalPicture: true };
  }

  togglePicture = () => {
    this.setState({ originalPicture: !this.state.originalPicture });
  };

  render() {
    return (
      <div>
        <button onClick={this.togglePicture}>
          <img
            src={(this.state.originalPicture && '/img/persons/maxence.png') || '/img/persons/maxence-glasses.png'}
            alt="Maxence"
          />
        </button>
      </div>
    );
  }
}

export default ClickablePicture;
