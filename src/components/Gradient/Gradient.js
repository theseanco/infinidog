import React from 'react'
import infiniteGradients from 'infinite-gradients'

class Gradient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //used for the offset
      thisNum: 0,
      //the gradientArray needs to be rotated 'right' when the offset reaches 100.
      gradientArray: ['red','#286554','blue','#9619e2']
    }

    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    requestAnimationFrame(this.tick)
  }

  tick() {
    //This tick is used to re-render the gradient in the next fram
    const oldNum = this.state.thisNum;
    const newNum = (oldNum+1)%100;
    if (newNum === 0) {
      let gradients = this.state.gradientArray;
      //remove last color
      gradients.pop();
      //add random color to the start of the array
      gradients.unshift(infiniteGradients.randomColor())
      // console.log(gradients)
      this.setState({gradientArray: gradients})
    }
    this.setState({thisNum: newNum});
    requestAnimationFrame(this.tick)
  }


  render() {

  return(
    <div
    className="backgroundDiv"
      style={{
      backgroundImage: infiniteGradients.getLinearGradient(this.state.gradientArray,this.state.thisNum, 90)
    }}
    >
      {this.props.children}
    </div>
    )
}
}

export default Gradient
