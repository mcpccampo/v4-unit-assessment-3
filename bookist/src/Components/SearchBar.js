import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      reset: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleInput(val) {
    this.setState({
      search: val,
    });
  }

  clearSearch() {
    this.setState({
      search: '',
    });
    this.props.clearSearch();
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={(e) => this.handleInput(e.target.value)}
          value={this.state.search}
        ></input>
        <button onClick={() => this.props.getSearch(this.state.search)}>Search</button>
        <button onClick={this.clearSearch}>Clear Search</button>
      </div>
    );
  }
}

export default SearchBar;
