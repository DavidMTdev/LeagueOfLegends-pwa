import {
  API_FAILURE_ITEM,
  API_STARTED_ITEM,
  API_SUCCESS_ITEM,
  API_SUCCESS_ITEMS
} from '../config/type'

const initialState = {
  loading: false,
  error: null,
  items: [],
  item: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case API_STARTED_ITEM:
      return {
        ...state,
        loading: true
      }
    case API_SUCCESS_ITEMS:
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    case API_SUCCESS_ITEM:
      return {
        ...state,
        loading: false,
        item: action.payload
      }
    case API_FAILURE_ITEM:
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: [],
        item: {}
      }
    default:
      return state
  }
}
