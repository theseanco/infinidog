import React, {Component} from 'react';
import Dog from '../../components/Dog/Dog';
import PageVisibility from 'react-page-visibility';
import { connect } from 'react-redux';

class DogSpawner extends Component {

  constructor(props){
    super(props);
    //list starts with a Dog in it, to get it preloaded.
    this.state = {
      list: [],
      visible: true
    };
  }

  componentDidMount() {
    //a function to add dog to the end of the array
    const addDog = () => {
      // console.log("bang",this.state.list);
      if (this.state.visible && !this.props.windowOpen) {
        this.setState((prevState) => ({
          list: [...prevState.list, <Dog />]
        }))
      }
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
      setInterval(() => addDog(), 8000)
      //wait for 10s, remove a dog every second thereafter
      // setTimeout(() => setInterval(() => removeDog(), 1000), 10000)
      //add a dog when the component has mounted, which will be paused by redux state
      addDog()
    }

    handleVisibilityChange = isVisible => {
      this.setState({visible: isVisible})
      this.forceUpdate();
    }

    render() {
      return (
        <PageVisibility onChange={this.handleVisibilityChange}>
        <div>
        {this.state.list.map((data, index) => {
          return <Dog />
        })}
        </div>
        </PageVisibility >

      )
    }
  }

const mapStateToProps = state => {
  return {
    windowOpen: state.windowClose.windowOpen
  }
}

export default connect(mapStateToProps,null)(DogSpawner)
