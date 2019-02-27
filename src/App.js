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
    numberToGuess: 0,
    previousGuesses: [],
    gameIsRunning: true,
  };

  handleAddGuess = (guessNumber) => {
    return this.setState((prevState) => {
      // Game logic
      const guessTemperature = this.checkTemperature(Number(guessNumber));

      return {
        previousGuesses: [
          ...prevState.previousGuesses,
          {
            guessNumber: guessNumber,
            id: (prevState.previousGuesses.length += 1),
            temperature: guessTemperature,
          },
        ],
      };
    });
  };

  resetGame = () => {
    this.setState((prevState) => {
      return {
        numberToGuess: Math.floor(
          Math.random() * prevState.gameSettings.maxNumber +
            prevState.gameSettings.minNumber,
        ),
        previousGuesses: [],
        gameIsRunning: true,
      };
    });
  };

  stopGame = () => {
    this.setState(() => {
      return {
        gameIsRunning: false,
      };
    });
  };

  checkTemperature = (guessedNumber) => {
    let previousNumberGuessed = null;
    if (this.state.previousGuesses.length > 0) {
      previousNumberGuessed = Number(
        this.state.previousGuesses[this.state.previousGuesses.length - 1]
          .guessNumber,
      );
    }

    const numberToGuess = this.state.numberToGuess;

    if (guessedNumber === numberToGuess) {
      // Is guessedNumber the correct number?
      // if so return "Winner!"
      this.stopGame();
      return { text: 'Winner!', colorTag: 'has-text-success' };
    } else if (
      guessedNumber <= numberToGuess + 3 &&
      guessedNumber >= numberToGuess - 3
    ) {
      // Is the user within 3 numbers?
      // if so, return "On fire!"
      return { text: 'On fire!', colorTag: 'has-text-danger' };
    } else if (this.state.previousGuesses.length > 0) {
      // did the user already guess?
      if (
        Math.abs(numberToGuess - guessedNumber) >
        Math.abs(numberToGuess - previousNumberGuessed)
      ) {
        return { text: 'Colder', colorTag: 'has-text-link' };
      } else {
        return { text: 'Warmer', colorTag: 'has-text-danger' };
      }
      // If so, is the guessed number closer or farther than the previously guessed number?
      // closer, return warmer
      // farther, return colder
    } else {
      // if the user hasn't already guessed
      if (
        guessedNumber <= numberToGuess + 5 &&
        guessedNumber >= numberToGuess - 5
      ) {
        // if the guess is within 5
        // return hot
        return { text: 'Hot', colorTag: 'has-text-danger' };
      } else {
        // else
        // return cold
        return { text: 'Cold', colorTag: 'has-text-link' };
      }
    }
  };

  setTemperature = () => {};

  componentDidMount() {
    this.resetGame();
  }

  render() {
    return (
      <div className="App">
        <div className="box">
          <Title />
        </div>
        <div className="game box">
          <Header
            gameSettings={this.state.gameSettings}
            gameIsRunning={this.state.gameIsRunning}
          />
          <GuessInput
            gameSettings={this.state.gameSettings}
            gameIsRunning={this.state.gameIsRunning}
            addGuess={this.handleAddGuess}
          />
          <Results
            gameIsRunning={this.state.gameIsRunning}
            previousGuesses={this.state.previousGuesses}
          />
        </div>
      </div>
    );
  }
}

export default App;
