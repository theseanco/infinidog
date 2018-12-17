import React, {Component} from 'react';
import Sound from 'react-sound';
import './Music.css'

/*

classes for mute/play button

play:
fas fa-volume-upp

mute:
fas fa-volume-mute

*/

class Music extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: true
    }
  }

  render() {
    let volume, className;

    //invert previous state (without mutating it)
    const mutePlayButton = () => {
      this.setState((prevState) => {
        const newState = !prevState.playing
        return(
          {playing: newState}
        )
      })
    }

    //is the sound playing?
    if(this.state.playing){
      volume = 80;
      className = "fas fa-volume-up"
    } else  {
        volume = 0;
        className = "fas fa-volume-mute"
      }


  return(
    <div>
    <button className="muteButton" type="button" onClick={() => mutePlayButton()}><i className={className}/></button>
   <Sound
      url="https://github.com/theseanco/infinidog/blob/master/music/rolem_-_Neoishiki.mp3?raw=true"
      playStatus={Sound.status.PLAYING}
      playFromPosition={0 /* in milliseconds */}
      volume={volume}
    />
    </div>
  )
}
}

export default Music
