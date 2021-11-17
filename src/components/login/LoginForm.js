import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import actions from '../../actions'

import { FormLogin, InputStyled, InputSubmit } from '../../styles/login'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {}, [])

  const onSubmit = e => {
    e.preventDefault()
    dispatch(actions.login.fetchAuth(username, password))
  }

  return (
    <FormLogin onSubmit={onSubmit}>
      <InputStyled
        value={username}
        onChange={e => setUsername(e.target.value)}
        name='username'
        placeholder='username'
      ></InputStyled>
      <InputStyled
        value={password}
        onChange={e => setPassword(e.target.value)}
        type='password'
        name='password'
        placeholder='password'
      ></InputStyled>
      <InputSubmit type='submit' placeholder='Connexion'></InputSubmit>
    </FormLogin>
  )
}

export default LoginForm
