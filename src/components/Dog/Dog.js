/*

This component renders a single dog!

*/

import React, {Component} from 'react'
import './Dog.css'
import PageVisibility from 'react-page-visibility'
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
      animationDuration: 6,
      isVisible: true
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

        //offload results from API call to state
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
    //after 21 seconds (max animation time), render null
    setTimeout(() => this.setState({renderComponent: false}), 21000)

  }

  handleImageLoaded() {
    this.setState({loaded: true})
  }

  handleVisibilityChange = isVisible => {
    this.setState({ isVisible: isVisible })
    // console.log("should dogs be animating", isVisible)
  }


  render() {

    const {
      windowOpen
    } = this.props

    let dogRender,
    showImage = null,
    divClasses = 'dogDiv paused',
    renderComponent = this.state.renderComponent,
    visibleClasses = '';

    if(this.state.dogType === 'image') {
      dogRender = <img src={this.state.dog} onLoad={this.handleImageLoaded.bind(this)}/>
    } else if (this.state.dogType === 'video') {
      dogRender = <video src={this.state.dog} autoPlay loop muted/>
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
    this.state.isVisible ? visibleClasses = '' : visibleClasses = 'notVisible';

    console.log(`${divClasses} ${visibleClasses}`)

    //conditional rendering - using setTimeout to "unmount" components after x seconds
    if (renderComponent) {
      return(
        <PageVisibility onChange={this.handleVisibilityChange}>
          <div className={`${divClasses} ${visibleClasses}`} style={{top: `${this.state.height}px`, animationDuration: `${this.state.animation}s`}} >
            {dogRender}
          </div>
        </PageVisibility>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = state => {
  return {
    windowOpen: state.windowClose.windowOpen
  }
}

export default connect(mapStateToProps,null)(Dog)
