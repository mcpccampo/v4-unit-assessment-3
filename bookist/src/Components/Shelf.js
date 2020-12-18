import React, { Component } from 'react';
import data from '../data.js';

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: data,
      shelf: [],
      searchValue: '',
    };
  }

  render() {
    return (
      <div className="shelf">
        <h2>Shelf</h2>
        {this.state.shelf[0].title}
      </div>
    );
  }
}

export default Shelf;
