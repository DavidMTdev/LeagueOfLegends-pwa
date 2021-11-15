export const LOGIN_STATE = 'LOGIN_STATE'

export const stateLogin = (username, password) => ({
  type: LOGIN_STATE,
  payload: {
    username: username,
    password: password
  }
})
