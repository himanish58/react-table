import React from 'react';

class Row extends React.Component {
  render() {

    const details = this.props.details;

    return (
      <tr>
        <td>{details.name}</td>
        <td>{details.email}</td>
        <td>{details.phone}</td>
        <td><a href="#">DELETE</a></td>
        <td><a href="#">Details</a></td>
      </tr>
    );
  }
}

export default Row;
