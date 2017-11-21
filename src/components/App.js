import React from 'react';
import Header from './Header';
import Table from './Table';

class App extends React.Component {
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
