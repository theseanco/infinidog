/*

This component renders a single dog!

*/

import React from 'react'
import './Dog.css'
import { connect } from 'react-redux';


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
        // console.log(result);
        //height is max 80% of window height, so that dogs don't render offscreen,
        let height = Math.random() * (window.innerHeight*0.8);
        let width = Math.random() * (window.innerWidth * 0.8) - (window.innerWidth * 0.2);

        //offload results from API call to state
        this.setState({
          isLoaded: true,
          dog: result,
          dogType: dogType,
          height: height,
          width: width,
          renderComponent: true
        })
      }
    )
    //set state to be written to animation duration
    this.setState({animation: randomNum})
    //after 21 seconds (max animation time), render null
  }

  handleImageLoaded() {
    this.setState({loaded: true})
  }

  render() {

    const {
      windowOpen
    } = this.props

    let dogRender,
    divClasses = 'dogDiv paused',
    renderComponent = this.state.renderComponent,
    visibleClasses = '',
    inlineStyle;

    if(this.state.dogType === 'image') {
      dogRender = <img src={this.state.dog} onLoad={this.handleImageLoaded.bind(this)} alt="Dog"/>
    } else if (this.state.dogType === 'video') {
      dogRender = <video src={this.state.dog} autoPlay loop muted alt="Dog Video"/>
    } else {
      dogRender = null
    }

    //check if an image is loaded and the intro modal is closed, then apply the right classes
    this.state.loaded && !windowOpen ? divClasses = 'dogDiv' : divClasses = 'dogDiv paused'
    //check if the source file is a video, then apply the right classes
    if(!this.state.loaded && this.state.dogType === 'video') {
      divClasses = 'dogDiv'
    }
    //check if the dog is visible
    this.props.isVisible ? visibleClasses = '' : visibleClasses = 'notVisible';

    //change style based on orientation
    if(this.props.screenType === 'landscape') {
      inlineStyle = {top: `${this.state.height}px`, animationDuration: `${this.state.animation}s`}
    } else if (this.props.screenType === 'portrait') {
      inlineStyle = {left: `${this.state.width}px`, animationDuration: `${this.state.animation}s`}
    }

    //conditional rendering - using setTimeout to "unmount" components after x seconds
    if (renderComponent) {
      return(
          <div className={`${divClasses} ${visibleClasses}`} style={inlineStyle} >
            {dogRender}
          </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = state => {
  return {
    windowOpen: state.windowClose.windowOpen,
    isVisible: state.windowVisibility.isVisible
  }
}

export default connect(mapStateToProps,null)(Dog)
