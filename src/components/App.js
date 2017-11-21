import React from 'react';
import Header from './Header';
import sampleData from '../sampleData';
import Table from './Table';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      details: sampleData,
      isCreateClicked: false,
    };
    this.removePerson = this.removePerson.bind(this);
  }

  removePerson(index) {
    const details = { ...this.state.details };
    delete details[index];
    this.setState({ details });
  }

  render() {
    return (
      <div className="mainArea">
        <Header />
        <Table personDetails={this.state.details} removePerson={this.removePerson} />
      </div>
    );
  }
}

export default App;
