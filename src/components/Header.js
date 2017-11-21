import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <input type="search" className="header" placeholder="Search by Email Address" onChange={(e) => this.props.updateSearchText(e)} />
        <button className="header" onClick={(e) => this.props.createPerson(e)}>Create</button>
      </div>
    );
  }
}

export default Header;
