import React, {Component} from 'react';
import Dog from '../../components/Dog/Dog';
import { connect } from 'react-redux';

class DogSpawner extends Component {

  constructor(props){
    super(props);
    //list starts with a Dog in it, to get it preloaded.
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    //variables controlling the rate at which dogs are spawned.
    let spawnTime = 1000, maxDogs = 30;
    //a function to add dog to the end of the array
    const addDog = () => {
      //check if the window is visible. if it's not, don't add more.
      if (this.props.isVisible && !this.props.windowOpen) {
        this.setState((prevState) => ({
          list: [...prevState.list, <Dog key={Date.now()}/>]
        }))
      }
    }

    const removeDog = () => {
      //check if the window is visible, if it's not, don't remove stuff.
      if (this.state.list.length >= maxDogs && this.props.isVisible) {
      this.setState((prevState) => {
        let newDogs = prevState.list;
        newDogs.shift();
        console.log(newDogs);
        return(
          {
            list: newDogs
          })
        })
      }
    }

      //every 1000 add dog
      setInterval(() => addDog(), spawnTime)
      //wait for 10s, remove a dog every second thereafter
      setTimeout(() => setInterval(() => removeDog(), spawnTime), spawnTime*maxDogs)
      //add a dog when the component has mounted, which will be paused by redux state
      addDog()
    }

    render() {
      return (
        <div>
        {this.state.list.map((data, index) => {
          return (
            data
          )
        })}
        </div>

      )
    }
  }

const mapStateToProps = state => {
  return {
    windowOpen: state.windowClose.windowOpen,
    isVisible: state.windowVisibility.isVisible
  }
}

export default connect(mapStateToProps,null)(DogSpawner)
