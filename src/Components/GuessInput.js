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
    this.props.addPlayer(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input is-info is-medium"
            type="text"
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
      </div>
    );
  }
}

export default GuessInput;
