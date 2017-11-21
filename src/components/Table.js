import React from 'react';
import Row from './Row';

class Table extends React.Component {
  render() {
    return (
      <table border='1'>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {
          Object
          .keys(this.props.personDetails)
          .map((key) => <Row key={key} details={this.props.personDetails[key]} />)
        }
      </tbody>
      </table>
    );
  }
}

export default Table;
