import Music from './components/Music/Music'
import Dog from './components/Dog/Dog'
import Gradient from './components/Gradient/Gradient'
/*
Import linear gradients API
Use infiniteGradients.getLinearGradient

*/

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Gradient>
      <h1> lorem </h1>
        <Dog />
        <Music />
      </Gradient>
    );
  }
}

export default App;
