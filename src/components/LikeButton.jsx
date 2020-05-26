import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  likeCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="like-button-container" >
        <button onClick={this.likeCounter}>
          <span role="img" aria-label="Like Button">
            👍 {this.state.count} Likes!
          </span>
        </button>
      </div>
    );
  }
}

export default LikeButton;
