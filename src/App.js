import React, { Component } from 'react';
import './App.css';
import './bulma.min.css';

import Title from './Components/Title';
import Header from './Components/Header';
import GuessInput from './Components/GuessInput';
import Results from './Components/Results';

class App extends Component {
  state = {
    previousGuesses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,],
  };

  render() {
    return (
      <div className="App">
        <div className="box">
          <Title />
        </div>
        <div className="game box">
          <Header />
          <GuessInput />
          <Results previousGuesses={this.state.previousGuesses}/>
        </div>
      </div>
    );
  }
}

export default App;
