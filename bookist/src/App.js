import React, { Component } from 'react';
import './App.css';

import dataFile from './data';

import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Shelf from './Components/Shelf';
import BookShelf from './Components/BookShelf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookShelf: [],
      data: dataFile,
      userBookShelf: [],
    };
    this.setSearch = this.setSearch.bind(this);
    this.clearBookShelf = this.clearBookShelf.bind(this);
    this.handleBookSelection = this.handleBookSelection.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
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

  handleBookSelection(key) {
    const updatedShelf = [...this.state.userBookShelf];
    updatedShelf.push(this.state.data[key + 1]);
    this.setState({
      userBookShelf: updatedShelf,
    });
  }

  clearShelf() {
    this.setState({
      userBookShelf: [],
      bookShelf: [],
    });
  }

  render() {
    return (
      <div className="App">
        <h1> APP </h1>
        <Header />
        <SearchBar getSearch={this.setSearch} clearSearch={this.clearBookShelf} />
        <div className="book-container">
          <div className="col-1">
            <Shelf
              data={this.state.data}
              bookShelf={this.state.bookShelf}
              select={this.handleBookSelection}
            />
          </div>
          <div className="col-2">
            <BookShelf shelf={this.state.userBookShelf} clear={this.clearShelf} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
