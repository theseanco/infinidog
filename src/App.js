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

  constructor(props){
    super(props);
    this.state = {
      list: []
    };
  }


  render() {
    return (
      <Gradient>
        <Dog />
        <Music />
      </Gradient>
    );
  }
}

export default App;
