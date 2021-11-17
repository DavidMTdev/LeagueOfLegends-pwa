import { API_STARTED, API_SUCCESS, API_FAILURE } from '../actions/login'

const initialState = {
  loading: false,
  error: null,
  data: localStorage.getItem('token')
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
        error: action.payload
      }
    default:
      return state
  }
}
