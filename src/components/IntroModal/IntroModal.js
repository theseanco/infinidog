import React from 'react';
import './IntroModal.css';

//redux goods
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions'


const componentClasses = ['overlay-styling'];

class Overlay extends React.Component {

  constructor(props) {
    super(props)
    this.state = {hide: false}
  }

  //Setting up CSS transitions for the overlay, using the class show to push an opacity level to overlay-styling


  render() {
    const {closeWindow} = this.props

  if (this.state.hide) {componentClasses.push('hide')};

  return (
    <div className={componentClasses.join(' ')}>
    <div className="flex-container">
      <div className="overlayText">
       <h1 className="vibrate-1">INFINIDOG</h1>
       <div className="descriptionText">
       <p>
        Dogs, Forever, Set to Chiptune music.
        </p>
        <p>
        Powered by <a href="https://random.dog/">random.dog</a>.
        </p>
        <p>
        Music by <a href="http://freemusicarchive.org/music/Rolemusic/~/Neoishiki_1412">Rolemusic</a>.
        </p>
        <p>
        Code by <a href="https://github.com/theseanco/infinidog">theseanco</a>.
        </p>


        <button className="closeButton vibrate-2" onClick={() => {this.setState({hide: true}); closeWindow()}}>Start</button>
       </div>

     </div>
    </div>
    </div>
  )
}
}

const mapDispatchToProps = dispatch => {
  return {
    closeWindow: () => dispatch({type:actionTypes.CLOSE_INTRO_WINDOW})
  }
}

export default connect(null,mapDispatchToProps)(Overlay)
