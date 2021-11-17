import axios from 'axios'

export const LOGIN_STATE = 'LOGIN_STATE'

export const API_SUCCESS = 'API_SUCCESS'
export const API_FAILURE = 'API_FAILURE'
export const API_STARTED = 'API_STARTED'

export const fetchAuth = (username, password) => dispatch => {
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
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
}

const started = () => ({
  type: API_STARTED
})

const success = data => ({
  type: API_SUCCESS,
  payload: data
})

const failure = error => ({
  type: API_FAILURE,
  payload: {
    error
  }
})
