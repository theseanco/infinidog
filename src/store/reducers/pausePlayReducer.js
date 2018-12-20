import * as actionTypes from '../actions'

const initialState = {
  musicPlaying: true
}

const pausePlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PAUSE_PLAY_MUSIC:
      console.log(state.musicPlaying)
      return {
        ...state,
        musicPlaying: !state.musicPlaying
      }
    default:
      return state
  }
}

export default pausePlayReducer
