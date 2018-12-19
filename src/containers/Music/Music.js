import React, {Component} from 'react';
import Sound from 'react-sound';
import SoundModule from '../../components/SoundModule/SoundModule'
import './Music.css'
import { connect } from 'react-redux';

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
    if(this.state.playing && !this.props.windowOpen){
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
      volume={80}
    />
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    windowOpen: state.windowClose.windowOpen
  }
}

export default connect(mapStateToProps,null)(Music)
