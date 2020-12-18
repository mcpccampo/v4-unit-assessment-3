import React, { Component } from 'react';

import dataFile from './data';

import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Shelf from './Components/Shelf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookShelf: [],
      data: dataFile,
    };
    this.setSearch = this.setSearch.bind(this);
    this.clearBookShelf = this.clearBookShelf.bind(this);
  }

  setSearch(input) {
    const filtered = this.state.data.filter((record) => {
      return record.title.toLowerCase().includes(input.toLowerCase()) === true;
    });
    this.setState({
      bookShelf: [...filtered],
    });
  }

  clearBookShelf() {
    this.setState({
      bookShelf: [],
    });
  }

  render() {
    return (
      <div className="App">
        <h1> APP </h1>
        <Header />
        <SearchBar getSearch={this.setSearch} clearSearch={this.clearBookShelf} />
      </div>
    );
  }
}

export default App;
