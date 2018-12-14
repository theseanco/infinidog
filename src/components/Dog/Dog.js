import React, {Component} from 'react'

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      dog: "",
      dogType: ''
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

  render() {

    let dogRender

    if(this.state.dogType === 'image') {
      dogRender = <img src={this.state.dog}/>
    } else if (this.state.dogType === 'video') {
      dogRender = <video src={this.state.dog} autoPlay loop/>
    } else {
      dogRender = null
    }

  return(
    <div>
    <p> Dog</p>

    {dogRender}

    </div>
  )
}
}

export default Dog
