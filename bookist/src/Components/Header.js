import React from 'react';

function Header(props) {
  const { title } = props;
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
