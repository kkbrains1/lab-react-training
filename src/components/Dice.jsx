import React, { Component } from 'react';

class Dice extends Component {
  constructor() {
    super();
    this.state = { pictureSource: '/img/dice3.png' };
  }

  rollDie = () => {
    let imageNumber = Math.floor(Math.random() * (7 - 1) + 1);
    this.setState({
      pictureSource: `/img/dice${imageNumber}.png`,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.rollDie}>
          <img src={this.state.pictureSource} alt="roll the die" />
        </button>
      </div>
    );
  }
}

export default Dice;
