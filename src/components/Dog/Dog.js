/*

This component renders a single dog!

*/

import React, {Component} from 'react'
import './Dog.css'

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      dog: "",
      dogType: '',
      loaded: false,
      height: 0,
      animationDuration: 6
    }
  }

  componentDidMount() {
    //on mount, generate random number that will dictate animation length
    const randomNum = (Math.random() * 15) + 6
    //fetch dog picture
    fetch("https://random.dog/woof.json")
      .then(res => res.json())
      .then(res => res.url)
      .then(
        (result) => {
          let dogType
          result.match(/\.(jpeg|jpg|gif|png|JPG|PNG|JPEG|GIF)$/) === null ? dogType = 'video' : dogType = 'image';
          console.log(result);
          let height = Math.random() * window.innerHeight;

          this.setState({
            isLoaded: true,
            dog: result,
            dogType: dogType,
            height: height,
            renderComponent: true
          })
        }
      )
      //set state to be written to animation duration
      this.setState({animation: randomNum})
      //after 10 seconds, render null
      setTimeout(() => this.setState({renderComponent: false}), 10000)

  }

  handleImageLoaded() {
    this.setState({loaded: true})
    console.log("loaded")
  }


  render() {

    let dogRender, showImage = null, divClasses = 'dogDiv paused', renderComponent = this.state.renderComponent;

    if(this.state.dogType === 'image') {
      dogRender = <img src={this.state.dog} onLoad={this.handleImageLoaded.bind(this)}/>
    } else if (this.state.dogType === 'video') {
      dogRender = <video src={this.state.dog} autoPlay loop />
    } else {
      dogRender = null
    }

    // const style = this.state.loaded ? {} : {visibility: 'hidden'};
    //check if an image is loaded, then apply the right classes
    this.state.loaded ? divClasses = 'dogDiv' : divClasses = 'dogDiv paused'

    //check if the source file is a video, then apply the right classes
    if(!this.state.loaded && this.state.dogType === 'video') {
      divClasses = 'dogDiv'
    }

    if (renderComponent) {
  return(
    <div className={divClasses} style={{top: `${this.state.height}px`, animationDuration: `${this.state.animation}s`}} >
    {dogRender}
    </div>
  )
} else {
  return null
}
}
}

export default Dog
