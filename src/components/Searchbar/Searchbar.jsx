import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInput = ({ currentTarget }) => {
    this.setState({ query: currentTarget.value });
  };

  handleSumbit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSumbit}>
          <button className="SearchForm-button" type="submit">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <label>
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              value={this.state.query}
              onChange={this.handleInput}
              autoFocus
              placeholder="Search images"
            />
          </label>
        </form>
      </header>
    );
  }
}

export default Searchbar;
