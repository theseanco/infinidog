import Music from './components/Music/Music'
import Dog from './components/Dog/Dog'
import DogSpawner from './containers/DogSpawner/DogSpawner'
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
      <div>
      <Gradient>
      <DogSpawner />
      </Gradient>
      <Music />
      </div>
    );
  }
}

export default App;
