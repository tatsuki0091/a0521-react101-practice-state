import React, { Component } from 'react';

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
];

export default class ChallengeTwo extends Component {
  //declare the states
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
    };
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    setInterval(() => {
      this.setState({ arr: studentList });
    }, 3000);
    //display the student list after 3 seconds
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    let nameArr = this.state.arr;
    nameArr = nameArr
      .map(function (a) {
        return { weight: Math.random(), value: a };
      })
      .sort(function (a, b) {
        return a.weight - b.weight;
      })
      .map(function (a) {
        return a.value;
      });
    this.setState({ arr: nameArr });
  };

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>
            {this.state.arr.map((ar) => (
              <li>{ar}</li>
            ))}
          </ul>
        </div>
        <button className="btn large" onClick={this.randomize}>
          Randomize
        </button>
      </>
    );
  }
}
