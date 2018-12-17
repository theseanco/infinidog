import React, {Component} from 'react';
import Sound from 'react-sound';
import SoundModule from '../../components/SoundModule/SoundModule'
import './Music.css'

class Music extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      volume: 80,
    }
  }

  render() {
    let soundPlaying, className;

    //invert previous state (without mutating it)
    const pausePlayButton = () => {
      this.setState((prevState) => {
        const newState = !prevState.playing
        return(
          {playing: newState}
        )
      })
    }

    //is the sound playing?
    if(this.state.playing){
      soundPlaying = Sound.status.PLAYING;
      className = "fas fa-volume-up"
    } else  {
        soundPlaying = Sound.status.PAUSED;
        className = "fas fa-volume-mute"
      }


  return(
    <div>
    <button className="muteButton" type="button" onClick={() => pausePlayButton()}><i className={className}/></button>
    <Sound
      url="https://github.com/theseanco/infinidog/blob/master/music/rolem_-_Neoishiki.mp3?raw=true"
      playStatus={soundPlaying}
      playFromPosition={0 /* in milliseconds */}
      onPause={() => console.log('Paused')}
      onResume={() => console.log('Resumed')}
      onStop={() => console.log('Stopped')}
      volume={80}
    />
    </div>
  )
}
}

export default Music
