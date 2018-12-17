import React, {Component} from 'react'
import Dog from '../../components/Dog/Dog'

class DogSpawner extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: []
    };
  }

    componentDidMount() {
    //a function to add dog to the end of the array
    const addDog = () => {
      console.log("bang",this.state.list);
      this.setState((prevState) => ({
        list: [...prevState.list, <Dog />]
      }))
    }

    const removeDog = () => {
      this.setState((prevState) => {
        prevState.list.shift() ;
        return(
        {
          list: prevState.list
      })
    })
    console.log("removal", this.state.list)
    }

    //every 1000 add dog
    setInterval(() => addDog(), 1000)
    //wait for 10s, remove a dog every second thereafter
    // setTimeout(() => setInterval(() => removeDog(), 1000), 10000)
  }

  render() {
  return (
    <div>
    {this.state.list.map((data, index) => {
          return <Dog />
        })}
    </div>

  )
}
}

export default DogSpawner
