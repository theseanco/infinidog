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
      loaded: false
    }
  }

  componentDidMount() {
    fetch("https://random.dog/woof.json")
      .then(res => res.json())
      .then(res => res.url)
      .then(
        (result) => {
          let dogType
          result.match(/\.(jpeg|jpg|gif|png|JPG|PNG|JPEG|GIF)$/) === null ? dogType = 'video' : dogType = 'image';
          console.log(result)

          this.setState({
            isLoaded: true,
            dog: result,
            dogType: dogType
          })
        }
      )
  }

  handleImageLoaded() {
    this.setState({loaded: true})
    console.log("loaded")
  }

  render() {

    let dogRender, showImage = null, divClasses = 'dogDiv paused';

    if(this.state.dogType === 'image') {
      dogRender = <img src={this.state.dog} onLoad={this.handleImageLoaded.bind(this)}/>
    } else if (this.state.dogType === 'video') {
      dogRender = <video src={this.state.dog} autoPlay loop />
    } else {
      dogRender = null
    }

    // const style = this.state.loaded ? {} : {visibility: 'hidden'};
    this.state.loaded ? divClasses = 'dogDiv' : divClasses = 'dogDiv paused'

  return(

    <div className={divClasses} style={{top: `${Math.random()*window.innerHeight}px`}} >
    {dogRender}
    </div>
  )
}
}

export default Dog
