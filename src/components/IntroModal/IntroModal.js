import React from 'react'
import './IntroModal.css'


const componentClasses = ['overlay-styling'];

class Overlay extends React.Component {

  constructor(props) {
    super(props)
    this.state = {hide: false}
  }

  //Setting up CSS transitions for the overlay, using the class show to push an opacity level to overlay-styling


  render() {

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


        <button className="closeButton vibrate-2" onClick={() => {this.setState({hide: true})}}>Start</button>
       </div>

     </div>
    </div>
    </div>
  )
}
}

export default Overlay
