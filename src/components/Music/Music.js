import React from 'react';
import Sound from 'react-sound';

const Music = () => {
  return(
    <div>
    <p> this is a sound component and it is stopped, hello </p>
   <Sound
      url="https://github.com/theseanco/infinidog/blob/master/music/rolem_-_Neoishiki.mp3?raw=true"
      playStatus={Sound.status.STOPPED}
      playFromPosition={0 /* in milliseconds */}
      volume={1}
    />
    </div>
  )
}

export default Music
