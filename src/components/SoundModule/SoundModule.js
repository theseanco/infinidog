import React from 'react';
import Sound from 'react-sound'

const SoundModule = ({soundPlayingStatus}) => {

  return(
   <Sound
      url="https://github.com/theseanco/infinidog/blob/master/music/rolem_-_Neoishiki.mp3?raw=true"
      playStatus={soundPlayingStatus}
      playFromPosition={0 /* in milliseconds */}
      onPause={() => console.log('Paused')}
      onResume={() => console.log('Resumed')}
      onStop={() => console.log('Stopped')}
      volume={80}
    />
  )
}

export default SoundModule
