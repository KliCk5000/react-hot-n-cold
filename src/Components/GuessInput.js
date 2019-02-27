import React, { Component } from 'react';

class GuessInput extends Component {
  state = {
    value: '',
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addGuess(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { minNumber, maxNumber } = this.props.gameSettings;
    if (this.props.gameIsRunning) {
      return (
        <form className="field has-addons" onSubmit={this.handleSubmit}>
          <div className="control is-expanded">
            <input
              className="input is-info is-medium"
              type="number"
              min={minNumber}
              max={maxNumber}
              value={this.state.value}
              onChange={this.handleValueChange}
              placeholder="Enter your guess"
            />
          </div>
          <div className="control">
            <input
              className="button is-medium is-primary"
              type="submit"
              value="Guess"
            />
          </div>
        </form>
      );
    } else {
      return <div />;
    }
  }
}

export default GuessInput;
