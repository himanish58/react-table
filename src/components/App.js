import React from 'react';
import Header from './Header';
import sampleData from '../sampleData';
import Table from './Table';

class App extends React.Component {
  constructor() {
    super();
    console.log(sampleData);
    this.state = {
      details: sampleData,
    };
  }

  render() {
    return (
      <div className="mainArea">
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
