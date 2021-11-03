import React, { Component } from 'react';
//import images
import leftDir from '../Assets/look-left.jpeg';
import rightDir from '../Assets/look-right.jpeg';

class ChallengeOne extends Component {
  //declare the state here
  constructor(props) {
    super(props);
    this.state = {
      eyes: leftDir,
    };
  }

  //click left/right button handler goes here
  changeDir(eyes, dir) {
    if (dir === 'right' && eyes === leftDir) {
      this.setState({
        eyes: rightDir,
      });
    } else if (dir === 'left' && eyes === rightDir) {
      this.setState({
        eyes: leftDir,
      });
    }
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img className="ch1" src={this.state.eyes} alt="" />
        </div>
        <button
          className="btn"
          onClick={() => this.changeDir(this.state.eyes, 'left')}
        >
          ⭠
        </button>
        <button
          className="btn"
          onClick={() => this.changeDir(this.state.eyes, 'right')}
        >
          ⭢
        </button>
      </>
    );
  }
}

export default ChallengeOne;
