import axios from 'axios'

import {
  API_FAILURE_ITEM,
  API_STARTED_ITEM,
  API_SUCCESS_ITEM,
  API_SUCCESS_ITEMS
} from '../config/type'

export const fetchItems = (version, language) => dispatch => {
  dispatch(started())

  axios({
    method: 'GET',
    url: `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/item.json`
  })
    .then(res => {
      dispatch(success(API_SUCCESS_ITEMS, res.data.data))
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
}

const started = () => ({
  type: API_STARTED_ITEM
})

const success = (type, data) => ({
  type: type,
  payload: data
})

const failure = error => ({
  type: API_FAILURE_ITEM,
  payload: {
    error
  }
})
