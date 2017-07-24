import React, { Component } from 'react';
import Links from './links/Index';
import Settings from './settings/Index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Settings />

        <p>ZenThought</p>
        <p>Currency</p>
        <p>JP Date</p>
        <p>Weather</p>

        <Links />
      </div>
    );
  }
}

export default App;
