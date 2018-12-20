import * as actionTypes from '../actions'

const initialState = {
  isVisible: true
}

const windowVisibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WINDOW_VISIBILITY_CHANGE:
      console.log("window open", action.value);
      return {
        ...state,
        isVisible: action.value
      }
    default:
      return state
  }
}

export default windowVisibilityReducer
