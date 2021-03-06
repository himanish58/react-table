import React from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    let personDetails = this.props.personDetails;
    let filteredPersons = Object.keys(personDetails).filter(
      (key) => {
        return personDetails[key].email.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !== -1;
      }
    ).reduce((prev, current)=>{
      prev[current] = personDetails[current];
      return prev;
    }, {});

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

Table.PropTypes = {
  removePerson: PropTypes.func,
  personDetails: PropTypes.object,
};

export default Table;
