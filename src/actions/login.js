import axios from 'axios'

import {
  API_STARTED_LOGIN,
  API_SUCCESS_LOGIN,
  API_FAILURE_LOGIN
} from '../config/type'

export const fetchAuth = (history, username, password) => dispatch => {
  dispatch(started())

  axios({
    method: 'POST',
    url: 'https://easy-login-api.herokuapp.com/users/login',
    data: {
      username: username,
      password: password
    }
  })
    .then(res => {
      const token = res.headers['x-access-token']

      localStorage.setItem('token', token)
      dispatch(success(token))
      history.push('/builds')
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
}

export const logout = () => dispatch => {
  localStorage.removeItem('token')
  dispatch(success(null))
}

const started = () => ({
  type: API_STARTED_LOGIN
})

const success = data => ({
  type: API_SUCCESS_LOGIN,
  payload: data
})

const failure = error => ({
  type: API_FAILURE_LOGIN,
  payload: {
    error
  }
})
