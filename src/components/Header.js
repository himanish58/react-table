import React from 'react';
import PropTypes from 'prop-types';

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

Header.prototypes = {
  createPerson: PropTypes.func,
  updateSearchText: PropTypes.func,
};

export default Header;
