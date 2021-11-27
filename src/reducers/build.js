import {
  ADD_ITEM,
  REMOVE_ITEM,
  NEW_BUILD,
  SELECTED_BUILD
} from '../config/type'

const tokenBuilds = `${localStorage.getItem('token')}_builds`

const initialState = {
  tokenBuilds: tokenBuilds,
  builds: JSON.parse(localStorage.getItem(tokenBuilds)),
  selectedBuild: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_BUILD:
      return {
        ...state,
        builds: [...state.builds, action.payload]
      }
    case SELECTED_BUILD:
      return {
        ...state,
        selectedBuild: action.payload
      }
    case ADD_ITEM:
      return {
        ...state,
        builds: action.payload.builds,
        selectedBuild: action.payload.selectedBuild
      }
    default:
      return state
  }
}
