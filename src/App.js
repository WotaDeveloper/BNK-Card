import React, { Component } from 'react';
import Card from './components/card'
import Random from './components/random'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Card />
        <Random />
      </div>
    );
  }
}

export default App;
