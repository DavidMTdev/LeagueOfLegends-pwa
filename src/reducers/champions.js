import { API_STARTED, API_SUCCESS, API_FAILURE } from '../actions/champions'

const initialState = {
  loading: false,
  error: null,
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case API_STARTED:
      return {
        ...state,
        loading: true
      }
    case API_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      }
    default:
      return state
  }
}
