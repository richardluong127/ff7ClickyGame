import React, { Component } from "react";
import Card from "./components/card/Card";
import { Container } from "react-materialize";
import aeris from "./components/images/aeris.PNG";
import barrett from "./components/images/barrett.PNG";
import chocobo from "./components/images/chocobo.PNG";
import cid from "./components/images/cid.PNG";
import cloud from "./components/images/cloud.PNG";
import jenova from "./components/images/jenova.PNG";
import redxiii from "./components/images/redxiii.PNG";
import sephiroth from "./components/images/sephiroth.PNG";
import tifa from "./components/images/tifa.PNG";
import vincent from "./components/images/vincent.PNG";
import yuffie from "./components/images/yuffie.PNG";
import zack from "./components/images/zack.PNG";
import "./App.css";

require("normalize.css");

const image = [
  { id: 0, name: "aeris", img: aeris },
  { id: 1, name: "barrett", img: barrett },
  { id: 2, name: "chocobo", img: chocobo },
  { id: 3, name: "cid", img: cid },
  { id: 4, name: "cloud", img: cloud },
  { id: 5, name: "jenova", img: jenova },
  { id: 6, name: "redxiii", img: redxiii },
  { id: 7, name: "sephiroth", img: sephiroth },
  { id: 8, name: "tifa", img: tifa },
  { id: 9, name: "vincent", img: vincent },
  { id: 10, name: "yuffie", img: yuffie },
  { id: 11, name: "zack", img: zack }
];

class ClickyGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    image: image,
    clickedImage: []
  };

  //Having trouble getting the clicked image to be placed into the clickedImage array.  If I use a variable or event, it shows up as "null".
  //When I put 0 into line 47 and 52, it will score the game and place the first object into the clickedImage array.
  //When the object at 0 shows up twice, that's when the game will reset.
  //This is where I am currently in the assignment.
  handleCardClick = e => {
    const shuffled = this.shuffle(image);
    if (this.state.clickedImage.includes(this.state.image[0])) {
      this.setState({ score: 0, clickedImage: [] });
    } else {
      this.setState({
        image: shuffled,
        clickedImage: this.state.clickedImage.concat(this.state.image[0]),
        score: this.state.score + 1
      });
    }
  };

  shuffle = imageArray => {
    var m = imageArray.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = imageArray[m];
      imageArray[m] = imageArray[i];
      imageArray[i] = t;
    }
    return imageArray;
  };
  render() {
    return (
      <div>
        <h1 className="text-center">FF7 Clicky Game</h1>
        <h3 className="text-center">Score: {this.state.score}</h3>
        <h3 className="text-center">Top Score: {this.state.score}</h3>
        <Container className="container">
          <Card
            image={this.state.image}
            handleCardClick={this.handleCardClick}
          />
        </Container>
      </div>
    );
  }
}

export default ClickyGame;
