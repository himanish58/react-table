import React from 'react';
import Header from './Header';
import sampleData from '../sampleData';
import Table from './Table';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      details: sampleData,
    };
  }

  render() {
    return (
      <div className="mainArea">
        <Header />
        <Table personDetails={this.state.details} />
      </div>
    );
  }
}

export default App;
