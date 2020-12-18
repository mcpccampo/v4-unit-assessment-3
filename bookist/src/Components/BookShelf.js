import React from 'react';

function BookShelf(props) {
  const jsx = props.shelf.map((record) => {
    return (
      <div className="book-title" key={record.id}>
        <p>{record.title}</p>
      </div>
    );
  });
  return (
    <div className="book-component">
      <h2>Book Info</h2>
      <button onClick={() => props.clear()}>Clear Shelf</button>
      {jsx}
    </div>
  );
}
export default BookShelf;
