import * as actionTypes from '../actions'

const initialState = {
  windowOpen: true
}

const closeWindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLOSE_INTRO_WINDOW:
      return {
        ...state,
        windowOpen: false
      }
    default:
      return state
  }
}

export default closeWindowReducer
