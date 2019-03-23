import React, { Component } from "react";

class ClickyGame extends Component {
  state = {
    cards: [],
    score: 0,
    topScore: 0
  };

  render() {
    return (
      <div>
        <h1 className="text-center">FF Clicky Game</h1>
        <h3 className="text-center">Score: {this.state.score}</h3>
        <h3 className="text-center">Top Score: {this.state.score}</h3>
      </div>
    );
  }
}

export default ClickyGame;
