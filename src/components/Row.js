import React from 'react';

class Row extends React.Component {
  render() {

    const details = this.props.details;
    const index = this.props.index;

    return (
      <tr>
        <td>{details.name}</td>
        <td>{details.email}</td>
        <td>{details.phone}</td>
        <td>{details.address}</td>
        <td><a onClick={() => this.props.removePerson(index)}>DELETE</a></td>
      </tr>
    );
  }
}

export default Row;
