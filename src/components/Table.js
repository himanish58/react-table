import React from 'react';
import Row from './Row';

class Table extends React.Component {
  render() {
    let personDetails = this.props.personDetails;
    let filteredPersons = Object.keys(personDetails).filter(
      (key) => {
        return personDetails[key].email.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !== -1;
      }
    ).map((i)=>personDetails[i]);

    return (
      <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Address</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {
          Object
          .keys(filteredPersons)
          .map((key) => <Row key={key} details={filteredPersons[key]} removePerson={this.props.removePerson} index={key} />)
        }
      </tbody>
      </table>
    );
  }
}

export default Table;
