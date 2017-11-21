import React from 'react';
import Header from './Header';
import sampleData from '../sampleData';
import Table from './Table';
import { getName, getPhoneNumber, getAddress } from '../getRandomDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      details: sampleData,
    };
    this.removePerson = this.removePerson.bind(this);
    this.createPerson = this.createPerson.bind(this);
  }

  createPerson(event) {
    event.preventDefault();
    const name = getName();
    const email = `${name}@abc.xyz`;
    const phone = getPhoneNumber();
    const address = getAddress();
    const detail = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };
    const details = { ...this.state.details };
    const timestamp = Date.now();
    details[`person${timestamp}`] = detail;
    this.setState({ details });
  }

  removePerson(index) {
    const details = { ...this.state.details };
    delete details[index];
    this.setState({ details });
  }

  render() {
    return (
      <div className="mainArea">
        <Header createPerson={this.createPerson} />
        <Table personDetails={this.state.details} removePerson={this.removePerson} />
      </div>
    );
  }
}

export default App;
