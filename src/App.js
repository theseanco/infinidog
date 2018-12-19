import Music from './containers/Music/Music';
import SoundModule from './components/SoundModule/SoundModule';
import Dog from './components/Dog/Dog';
import DogSpawner from './containers/DogSpawner/DogSpawner';
import Gradient from './components/Gradient/Gradient';
import IntroModal from './components/IntroModal/IntroModal';
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
      <div className="backgroundDiv">
      <IntroModal />
      <Gradient>
      <DogSpawner />
      </Gradient>
      <Music />
      </div>
      {/*
      <SoundModule />
      */}
      </div>
    );
  }
}

export default App;
