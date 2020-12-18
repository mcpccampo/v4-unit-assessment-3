import React, { Component } from 'react';
import data from '../data.js';

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      bookShelf: [],
    };
  }

  render() {
    const data = this.props.bookShelf.length
      ? [...this.props.bookShelf]
      : [...this.props.data];
    const jsx = data.map((record) => {
      return (
        <div className="book-card">
          <h2>{record.title}</h2>
          <img src={record.img} />
          <h3>{record.author}</h3>
        </div>
      );
    });
    return <div className="shelf">{jsx}</div>;
  }
}

export default Shelf;
