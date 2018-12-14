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
      list: [true, true, true, true]
    };
  }


  componentDidMount() {
    const addDog = () => {
      console.log("bang",this.state.list);
      this.setState((prevState) => ({
        list: [...prevState.list, true]
      }))
    }

    setInterval(() => addDog(), 1000)
  }

  render() {

    return (
      <Gradient>
        {this.state.list.map((data, index) => {
          return <Dog />
        })}
        <Music />
      </Gradient>
    );
  }
}

export default App;
