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
      list: [true]
    };
  }


  componentDidMount() {
    //a function to add dog to the end of the array
    const addDog = () => {
      console.log("bang",this.state.list);
      this.setState((prevState) => ({
        list: [...prevState.list, true]
      }))
    }
    //
    // const removeDog = () => {
    //   console.log("remove dog?")
    //   this.setState((prevState) => {list: prevState.list.shift()})
    // }

    //every 1000 add dog
    setInterval(() => addDog(), 1000)
    //wait for 10s, remove a dog every s
    // setTimeout(() => setInterval(() => removeDog(), 1000), 10000)
  }

  render() {

    return (
      <div>
      <Gradient>
        {this.state.list.map((data, index) => {
          return <Dog />
        })}

      </Gradient>


      <Music />
      </div>
    );
  }
}

export default App;
