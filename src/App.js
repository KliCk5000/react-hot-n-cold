import React, { Component } from 'react';
import './App.css';
import './bulma.min.css';

import Title from './Components/Title';
import Header from './Components/Header';
import GuessInput from './Components/GuessInput';
import Results from './Components/Results';

class App extends Component {
  state = {
    gameSettings: {
      minNumber: 1,
      maxNumber: 20,
    },
    previousGuesses: [],
  };

  handleAddGuess = (guessNumber) => {
    this.setState((prevState) => {
      return {
        previousGuesses: [
          ...prevState.previousGuesses,
          {
            guessNumber: guessNumber,
            id: (prevState.previousGuesses.length += 1),
          },
        ],
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="box">
          <Title />
        </div>
        <div className="game box">
          <Header gameSettings={this.state.gameSettings} />
          <GuessInput gameSettings={this.state.gameSettings} addGuess={this.handleAddGuess} />
          <Results previousGuesses={this.state.previousGuesses} />
        </div>
      </div>
    );
  }
}

export default App;
