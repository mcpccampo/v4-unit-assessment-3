import React, { Component } from 'react';

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
        <div className="shelf-component" key={record.id}>
          <img
            src={record.img}
            alt="{record.title}"
            onClick={() => this.props.select(record.id)}
          />
          <h3>
            * {record.title} :: {record.author}{' '}
          </h3>
        </div>
      );
    });
    return <div className="shelf">{jsx}</div>;
  }
}

export default Shelf;
