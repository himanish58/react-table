import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <input type="search" className="header" placeholder="Search by Email Address"/>
        <button className="header">Create</button>
      </div>
    );
  }
}

export default Header;
