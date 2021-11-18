import {
  API_STARTED_LOGIN,
  API_SUCCESS_LOGIN,
  API_FAILURE_LOGIN,
  API_LOGOUT
} from '../config/type'

const initialState = {
  loading: false,
  error: null,
  data: localStorage.getItem('token')
}

export default (state = initialState, action) => {
  switch (action.type) {
    case API_STARTED_LOGIN:
      return {
        ...state,
        loading: true
      }
    case API_SUCCESS_LOGIN:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case API_LOGOUT:
      return {
        ...state,
        data: null
      }
    case API_FAILURE_LOGIN:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
