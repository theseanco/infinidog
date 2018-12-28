import React, {Component} from 'react';
import Sound from 'react-sound';
import './Music.css'
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions'
//NEXT: ADD PAUSE/PLAY FUNCTIONS AND MAP THEM INTO STATE.

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
    //is the sound playing?
    if(this.props.playMusic && !this.props.windowOpen){
      soundPlaying = Sound.status.PLAYING;
      className = "fas fa-volume-up"
    } else  {
        soundPlaying = Sound.status.PAUSED;
        className = "fas fa-volume-mute"
      }


  return(
    <div>
    <button className="muteButton" type="button" onClick={this.props.pausePlay} ><i className={className}/></button>
    <Sound
      url="https://github.com/theseanco/infinidog/blob/master/music/rolem_-_Neoishiki.mp3?raw=true"
      playStatus={soundPlaying}
      playFromPosition={0 /* in milliseconds */}
      volume={100}
      loop={true}
    />
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    windowOpen: state.windowClose.windowOpen,
    playMusic: state.pausePlay.musicPlaying
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pausePlay: () => dispatch({type:actionTypes.PAUSE_PLAY_MUSIC})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Music)
