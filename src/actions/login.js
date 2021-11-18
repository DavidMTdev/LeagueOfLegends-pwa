import axios from 'axios'
export const API_SUCCESS_LOGIN = 'API_SUCCESS_LOGIN'
export const API_LOGOUT = 'API_LOGOUT'
export const API_FAILURE_LOGIN = 'API_FAILURE_LOGIN'
export const API_STARTED_LOGIN = 'API_STARTED_LOGIN'

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

export const logout = () => dispatch => {
  localStorage.setItem('token', "")
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
